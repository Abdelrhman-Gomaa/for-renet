import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { Car } from '../models/car.model';
import { CreateCarBoardInput } from '../input/create-car-board.input';
import { UpdateCarInput } from '../input/update-car.input';
import { BaseHttpException } from 'src/exceptions/base-http-exception';
import { ErrorCodeEnum } from 'src/exceptions/error-code.enum';

@Injectable()
export class CarService {
    constructor(
        @Inject(Repositories.CarsRepository)
        private readonly carRepo: typeof Car,
    ) { }

    async createCarBoard(input: CreateCarBoardInput) {
        return await this.carRepo.create({ ...input });
    }

    async getAllCars() {
        return await this.carRepo.findAll();
    }

    async getOneCar(id: string) {
        const car = await this.carRepo.findOne({ where: { id } });
        if (!car) throw new BaseHttpException(ErrorCodeEnum.CAN_NOT_FIND_CAR);
        return car;
    }

    async updateCarBoard(id: string, input: UpdateCarInput) {
        const car = await this.carRepo.findOne({ where: { id } });
        if (!car) throw new BaseHttpException(ErrorCodeEnum.CAN_NOT_FIND_CAR);
        await this.carRepo.update({ ...input }, { where: { id } });
        return await this.carRepo.findOne({ where: { id } });
    }
}