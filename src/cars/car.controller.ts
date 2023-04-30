import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarBoardInput } from './input/create-car-board.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car')
@Controller('/car')
export class CarController {
    constructor(
        private readonly carService: CarService
    ) { }

    @Post()
    async createCarBoard(@Body() input: CreateCarBoardInput) {
        return await this.carService.createCarBoard(input);
    }

    @Get()
    async getAllCars() {
        return await this.carService.getAllCars();
    }
}