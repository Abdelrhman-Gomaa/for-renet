import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CarrierTypeEnum, CarsBrandEnum } from '../car.enum';

export class CreateCarBoardInput {
    
    @IsNotEmpty()
    @IsEnum(CarsBrandEnum)
    @ApiProperty({ enum: CarsBrandEnum })
    brand: CarsBrandEnum;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    model: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    modelYear: number;

    @IsNotEmpty()
    @IsEnum(CarrierTypeEnum)
    @ApiProperty({ enum: CarrierTypeEnum })
    carrierType: CarrierTypeEnum;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    sashes_No: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    CC: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    color: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    highestSpeed: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    speedTransmission: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    oneToHundredTime: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    horsePower: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    rentPricePerDay: number;

}