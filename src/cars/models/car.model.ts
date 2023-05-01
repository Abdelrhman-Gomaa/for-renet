import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Model, Table, PrimaryKey, Default, DataType, Column, AllowNull } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CarStatusEnum, CarrierTypeEnum, CarsBrandEnum } from '../car.enum';

@Table
@ObjectType()
export class Car extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    @ApiProperty()
    @Field(() => ID)
    id: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(CarsBrandEnum)) })
    @Field(() => CarsBrandEnum)
    brand: CarsBrandEnum;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    @Field()
    model: string;

    @ApiProperty()
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    @Field({ nullable: true })
    thumbnail?: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    modelYear: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(CarrierTypeEnum)) })
    @Field(() => CarrierTypeEnum)
    carrierType: CarrierTypeEnum;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    sashes_No: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    CC: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    @Field()
    color: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    highestSpeed: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    speedTransmission: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.DOUBLE })
    @Field()
    oneToHundredTime: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    horsePower: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    rentPricePerDay: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    rentPricePerHour: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    rentPricePerMonth: number;

    @ApiProperty()
    @AllowNull(true)
    @Default(CarStatusEnum.AVAILABLE)
    @Column({ type: DataType.ENUM(...Object.values(CarStatusEnum)) })
    @Field(() => CarStatusEnum, { nullable: true })
    carStatus?: CarStatusEnum;
}