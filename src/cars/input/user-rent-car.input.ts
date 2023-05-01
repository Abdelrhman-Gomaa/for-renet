import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';
import { RentTypeEnum } from '../car.enum';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UserRentCarsInput {

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty()
    @Field()
    carId: string;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty()
    @Field()
    userId: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(new Date().valueOf())
    @ApiProperty()
    @Field()
    startDate: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Field()
    period: number;

    @IsNotEmpty()
    @IsEnum(RentTypeEnum)
    @ApiProperty({ enum: RentTypeEnum })
    @Field(() => RentTypeEnum)
    rentType: RentTypeEnum;
}