import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CarrierTypeEnum, CarsBrandEnum } from '../car.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarBoardInput {

    @IsNotEmpty()
    @IsEnum(CarsBrandEnum)
    @ApiProperty({ enum: CarsBrandEnum })
    @Field(() => CarsBrandEnum)
    brand: CarsBrandEnum;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    @Field()
    model: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    modelYear: number;

    @IsNotEmpty()
    @IsEnum(CarrierTypeEnum)
    @ApiProperty({ enum: CarrierTypeEnum })
    @Field(() => CarrierTypeEnum)
    carrierType: CarrierTypeEnum;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    sashes_No: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    CC: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    @Field()
    color: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    highestSpeed: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    speedTransmission: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    oneToHundredTime: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    horsePower: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    rentPricePerHour: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    rentPricePerDay: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    rentPricePerMonth: number;
}