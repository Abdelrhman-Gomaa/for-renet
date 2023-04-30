import { ApiProperty } from '@nestjs/swagger';
import {
    Model,
    Table,
    PrimaryKey,
    Default,
    DataType,
    Column,
    AllowNull,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript';
import { User } from 'src/user/models/user.model';
import { Car } from './car.model';
import { RentTypeEnum } from '../car.enum';

@Table
export class UserRentCar extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    @ApiProperty()
    id: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({ type: DataType.UUID, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @ApiProperty()
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Car)
    @AllowNull(false)
    @Column({ type: DataType.UUID, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @ApiProperty()
    carId: string;

    @BelongsTo(() => Car)
    car: Car;

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    @ApiProperty()
    startDate: Date;

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    @ApiProperty()
    endDate: Date;

    @AllowNull(false)
    @Column({ type: DataType.DOUBLE })
    totalPrice: number;

    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    period: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(RentTypeEnum)) })
    rentType: RentTypeEnum;
}