import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarsProvider } from './car,provider';

@Module({
    imports: [],
    controllers: [CarController],
    providers: [CarService, ...CarsProvider],
    exports: [CarService]
})
export class CarModule { }