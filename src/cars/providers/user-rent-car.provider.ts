import { Repositories } from 'src/database/database.model.repositories';
import { UserRentCar } from '../models/user-rent-car';

export const UserRentCarsProvider = [
  {
    provide: Repositories.UserRentCarsRepository,
    useValue: UserRentCar,
  }
];