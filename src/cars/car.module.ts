import { Module } from '@nestjs/common';
import { CarController } from './controllers/car.controller';
import { CarService } from './services/car.service';
import { CarsProvider } from './providers/car.provider';
import { UserRentCarService } from './services/user-rent-cars.service';
import { UserRentCarController } from './controllers/user-rent-cars.controller';
import { UserRentCarsProvider } from './providers/user-rent-car.provider';
import { UserModule } from 'src/user/user.module';
import { CarResolver } from './resolver/car.resolver';

@Module({
    imports: [UserModule],
    controllers: [CarController, UserRentCarController],
    providers: [CarService, UserRentCarService, CarResolver, ...CarsProvider, ...UserRentCarsProvider],
    exports: [CarService, UserRentCarService]
})
export class CarModule { }