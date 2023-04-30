import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { UserRentCar } from '../models/user-rent-car.model';
import { UserRentCarsInput } from '../input/user-rent-car.input';
import { Car } from '../models/car.model';
import { BaseHttpException } from 'src/exceptions/base-http-exception';
import { ErrorCodeEnum } from 'src/exceptions/error-code.enum';
import { User } from 'src/user/models/user.model';

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

        if (input.startDate > input.endDate) throw new BaseHttpException(ErrorCodeEnum.START_DATE_MUST_BE_SMALLER_THAN_END_DATE);

        const rentCar = await this.userRentCarRepo.findAll({ where: { carId: input.carId } });
        rentCar.map(car => {
            if (car.endDate.valueOf() >= input.startDate) throw new BaseHttpException(ErrorCodeEnum.THIS_CAR_ALREADY_RENT_DOR_NOW);
            const prepPeriod = car.endDate.valueOf() + 86400000;
            if (prepPeriod >= input.startDate) throw new BaseHttpException(ErrorCodeEnum.CAR_IN_PREP_PERIOD_NOW_AND_WILL_VALID_IN_24_HOURS);
        });

        const rentPeriod = ((input.endDate - input.startDate) / 1000 / 60 / 60 / 24) + 1;
        const totalPrice = car.rentPricePerDay * rentPeriod;

        return await this.userRentCarRepo.create({
            ...input,
            period: rentPeriod,
            totalPrice
        });
    }
}