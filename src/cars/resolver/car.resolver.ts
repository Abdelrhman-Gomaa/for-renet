import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { CreateCarBoardInput } from '../input/create-car-board.input';
import { UpdateCarInput } from '../input/update-car.input';

@Resolver(Car)
// @UseGuards(AuthGuard)
export class CarResolver {
    constructor(private readonly carService: CarService) { }

    @Query(() => [Car])
    async getAllCars() {
        return await this.carService.getAllCars();
    }

    @Query(() => Car)
    async getOneCar(@Args('id') id: string) {
        return await this.carService.getOneCar(id);
    }

    @Mutation(() => Car)
    async createCarBoard(@Args('input') input: CreateCarBoardInput) {
        return await this.carService.createCarBoard(input);
    }

    @Mutation(() => Car)
    async updateCarBoard(@Args('input') input: UpdateCarInput) {
        return await this.carService.updateCarBoard(input.id, input);
    }
}