import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from 'src/database/database.model.repositories';
import { Car } from './models/car.model';

@Injectable()
export class CarService {
    constructor(
        @Inject(Repositories.CarsRepository)
        private readonly carRepo: typeof Car,
    ) { }
}