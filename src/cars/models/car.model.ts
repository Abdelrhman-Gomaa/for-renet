import { Model, Table, PrimaryKey, Default, DataType, Column, AllowNull } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CarrierTypeEnum, CarsBrandEnum } from '../car.enum';

@Table
export class Car extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    @ApiProperty()
    id: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(CarsBrandEnum)) })
    brand: CarsBrandEnum;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    model: string;

    @ApiProperty()
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    thumbnail?: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    modelYear: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(CarrierTypeEnum)) })
    carrierType: CarrierTypeEnum;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    sashes_No: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    CC: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    color: string;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    highestSpeed: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    speedTransmission: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    oneToHundredTime: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    horsePower: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    rentPricePerDay: number;

}