import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { UserRentCar } from '../models/user-rent-car.model';
import { UserRentCarsInput } from '../input/user-rent-car.input';
import { Car } from '../models/car.model';
import { BaseHttpException } from 'src/exceptions/base-http-exception';
import { ErrorCodeEnum } from 'src/exceptions/error-code.enum';
import { User } from 'src/user/models/user.model';
import { RentTypeEnum } from '../car.enum';
import { addDays, addHours, addMonths } from 'date-fns';

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

    async createCarBoard(input: UserRentCarsInput) {
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

}