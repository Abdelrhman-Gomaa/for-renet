import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserRentCarService } from '../services/user-rent-cars.service';
import { UserRentCarsInput } from '../input/user-rent-car.input';
import { UserRentCar } from '../models/user-rent-car.model';

@Resolver(UserRentCar)
// @UseGuards(AuthGuard)
export class UserRentCarResolver {
    constructor(private readonly userRentCarService: UserRentCarService) { }

    @Mutation(() => UserRentCar)
    async UserRentCarsRequest(@Args('input') input: UserRentCarsInput) {
        return await this.userRentCarService.UserRentCarsRequest(input);
    }

}