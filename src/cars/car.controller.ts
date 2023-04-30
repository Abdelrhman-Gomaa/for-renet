import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

    @Get('/:id')
    async getOneCar(@Param('id') id: string) {
        return await this.carService.getOneCar(id);
    }

    @Patch('/:id')
    async updateCar(@Param('id') id: string, @Body() input: CreateCarBoardInput) {
        return await this.carService.updateCar(id, input);
    }
}