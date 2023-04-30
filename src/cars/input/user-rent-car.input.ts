import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RentTypeEnum } from '../car.enum';

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
    period: number;

    @IsNotEmpty()
    @IsEnum(RentTypeEnum)
    @ApiProperty({ enum: RentTypeEnum })
    rentType: RentTypeEnum;
}