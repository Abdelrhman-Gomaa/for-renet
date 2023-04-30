import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRentCarService } from '../services/user-rent-cars.service';
import { UserRentCarsInput } from '../input/user-rent-car.input';

@ApiTags('UserRentCar')
@Controller('/UserRentCar')
export class UserRentCarController {
    constructor(
        private readonly userRentCarService: UserRentCarService
    ) { }

    @Post()
    async createCarBoard(@Body() input: UserRentCarsInput) {
        return await this.userRentCarService.createCarBoard(input);
    }
}