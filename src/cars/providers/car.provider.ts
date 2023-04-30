import { Repositories } from 'src/database/database.model.repositories';
import { Car } from '../models/car.model';

export const CarsProvider = [
  {
    provide: Repositories.CarsRepository,
    useValue: Car,
  }
];