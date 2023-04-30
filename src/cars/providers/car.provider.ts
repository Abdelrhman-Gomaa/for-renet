import { Repositories } from 'src/database/database.model.repositories';
import { Car } from '../models/car.model';
import { UserRentCar } from '../models/user-rent-car';

export const CarsProvider = [
  {
    provide: Repositories.CarsRepository,
    useValue: Car,
  }
];