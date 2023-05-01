import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { UserRentCar } from '../models/user-rent-car.model';
import { UserRentCarsInput } from '../input/user-rent-car.input';
import { Car } from '../models/car.model';
import { BaseHttpException } from 'src/exceptions/base-http-exception';
import { ErrorCodeEnum } from 'src/exceptions/error-code.enum';
import { User } from 'src/user/models/user.model';
import { CarStatusEnum, RentTypeEnum } from '../car.enum';
import { addDays, addHours, addMonths } from 'date-fns';
import { Op } from 'sequelize';

@Injectable()
export class UserRentCarService {
    constructor(
        @Inject(Repositories.CarsRepository)
        private readonly carRepo: typeof Car,
        @Inject(Repositories.UserRentCarsRepository)
        private readonly userRentCarRepo: typeof UserRentCar,
        @Inject(Repositories.UsersRepository)
        private readonly userRepo: typeof User,
    ) { }

    async UserRentCarsRequest(input: UserRentCarsInput) {
        const car = await this.carRepo.findOne({ where: { id: input.carId } });
        if (!car) throw new BaseHttpException(ErrorCodeEnum.CAN_NOT_FIND_CAR);
        const user = await this.userRepo.findOne({ where: { id: input.userId } });
        if (!user) throw new BaseHttpException(ErrorCodeEnum.INVALID_USER);
        const rentCar = await this.userRentCarRepo.findAll({ where: { carId: input.carId } });
        rentCar.map(car => {
            if (car.endDate.valueOf() >= input.startDate) throw new BaseHttpException(ErrorCodeEnum.THIS_CAR_ALREADY_RENT_FOR_NOW);
            const prepPeriod = car.endDate.valueOf() + 7198000;
            if (prepPeriod >= input.startDate) throw new BaseHttpException(ErrorCodeEnum.CAR_IN_PREP_PERIOD_NOW_AND_WILL_VALID_IN_2_HOURS);
        });
        let totalPrice;
        let endDate;
        if (input.rentType === RentTypeEnum.HOUR) {
            endDate = addHours(input.startDate, input.period);
            totalPrice = car.rentPricePerHour * input.period;
        } else if (input.rentType === RentTypeEnum.DAY) {
            endDate = addDays(input.startDate, input.period);
            totalPrice = car.rentPricePerDay * input.period;
        } else if (input.rentType === RentTypeEnum.MONTH) {
            endDate = addMonths(input.startDate, input.period);
            totalPrice = car.rentPricePerMonth * input.period;
        }
        return await this.userRentCarRepo.create({
            ...input,
            totalPrice,
            endDate
        });
    }

    async carsAvailability() {
        const cars = await this.carRepo.findAll();
        let carsIds = cars.map(car => car.id);
        const carsRent = await this.userRentCarRepo.findAll({ where: { carId: carsIds, } });
        let carsRentIds = [];
        let carsFixedIds = [];
        carsRent.map(car => {
            let checkMaintenanceTime = car.endDate.valueOf() + 7198000;
            if (car.startDate < new Date() && car.endDate > new Date()) {
                carsRentIds.push(car.carId);
            } else if (car.endDate.valueOf() < new Date().valueOf() && checkMaintenanceTime > new Date().valueOf()) {
                carsFixedIds.push(car.carId);
            }
        });
        await this.carRepo.update({ carStatus: CarStatusEnum.AVAILABLE }, { where: { id: carsIds } });
        await this.carRepo.update({ carStatus: CarStatusEnum.RENTED }, { where: { id: carsRentIds } });
        await this.carRepo.update({ carStatus: CarStatusEnum.IN_MAINTENANCE }, { where: { id: carsFixedIds } });

        const carsAfterRefresh = await this.carRepo.findAll();
        return carsAfterRefresh;
    }

    async availableIn(car: Car) {
        const carRent = await this.userRentCarRepo.findAll({ where: { carId: car.id } });
        let availableIn = 0;
        carRent.map(carRent => {
            let checkMaintenanceTime = carRent.endDate.valueOf() + 7198000;
            let availableInSecond;
            if (car.id === carRent.carId && carRent.startDate < new Date() && carRent.endDate > new Date()) {
                availableInSecond = ((carRent.endDate.valueOf() - new Date().valueOf()) + 7198000) / 1000 / 60 / 60; /// 60 / 60;
                if (availableInSecond > 0) availableIn = availableInSecond;
            }
            else if (car.id === carRent.carId && carRent.endDate < new Date() && carRent.endDate.valueOf() < checkMaintenanceTime) {
                availableInSecond = (carRent.endDate.valueOf() - new Date().valueOf()) / 1000 / 60 / 60; /// 60 / 60;
                if (availableInSecond > 0) availableIn = availableInSecond;
            }
        });
        let availableTimeInHour = (Math.round(availableIn * 100) / 100).toFixed(2);
        const minutes = availableTimeInHour.split('.')[1];
        const timeInMin = (parseFloat(minutes) / 100) * 60;
        const timeInMinutes = (Math.round(timeInMin * 100) / 100).toFixed(0);
        const timeInHours = availableTimeInHour.split('.')[0];
        return {
            hours: parseInt(timeInHours),
            minutes: parseInt(timeInMinutes)
        };
    }

}