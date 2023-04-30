import { Body, Controller, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarBoardInput } from './input/create-car-board.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car')
@Controller()
export class CarController {
    constructor(
        private readonly carService: CarService
    ) { }

    @Post()
    async createCarBoard(@Body() input: CreateCarBoardInput) {
        return await this.carService.createCarBoard(input);
    }
}