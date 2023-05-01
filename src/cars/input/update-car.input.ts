import { Field, ID, InputType } from '@nestjs/graphql';
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCarBoardInput } from './create-car-board.input';
import { IsNotEmpty, IsEnum, IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';
import { CarsBrandEnum, CarrierTypeEnum } from '../car.enum';

@InputType()
export class UpdateCarInput {
    @IsUUID()
    @IsOptional()
    @Field(() => ID)
    id?: string;

    @IsEnum(CarsBrandEnum)
    @ApiProperty({ enum: CarsBrandEnum })
    @Field(() => CarsBrandEnum, { nullable: true })
    brand: CarsBrandEnum;

    @IsString()
    @ApiProperty()
    @Field({ nullable: true })
    model: string;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    modelYear: number;

    @IsEnum(CarrierTypeEnum)
    @ApiProperty({ enum: CarrierTypeEnum })
    @Field(() => CarrierTypeEnum, { nullable: true })
    carrierType: CarrierTypeEnum;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    sashes_No: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    CC: number;

    @IsString()
    @ApiProperty()
    @Field({ nullable: true })
    color: string;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    highestSpeed: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    speedTransmission: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    oneToHundredTime: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    horsePower: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    rentPricePerHour: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    rentPricePerDay: number;

    @IsNumber()
    @ApiProperty()
    @Field({ nullable: true })
    rentPricePerMonth: number;
}
