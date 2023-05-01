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
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Table
@ObjectType()
export class UserRentCar extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    @ApiProperty()
    @Field(() => ID)
    id: string;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({ type: DataType.UUID, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @ApiProperty()
    @Field()
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Car)
    @AllowNull(false)
    @Column({ type: DataType.UUID, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @ApiProperty()
    @Field()
    carId: string;

    @BelongsTo(() => Car)
    car: Car;

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    @ApiProperty()
    @Field()
    startDate: Date;

    @AllowNull(false)
    @Column({ type: DataType.DATE })
    @ApiProperty()
    @Field()
    endDate: Date;

    @AllowNull(false)
    @Column({ type: DataType.DOUBLE })
    @Field()
    totalPrice: number;

    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    @Field()
    period: number;

    @ApiProperty()
    @AllowNull(false)
    @Column({ type: DataType.ENUM(...Object.values(RentTypeEnum)) })
    @Field(() => RentTypeEnum)
    rentType: RentTypeEnum;
}