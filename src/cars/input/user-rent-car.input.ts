import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserRentCarsInput {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    carId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    userId: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    startDate: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    endDate: number;
}