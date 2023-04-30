import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { Car } from './models/car.model';
import { CreateCarBoardInput } from './input/create-car-board.input';

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
        return await this.carRepo.findOne({ where: { id } });
    }
}