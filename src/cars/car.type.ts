import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AvailableIn {
    @Field()
    hours: number;

    @Field()
    minutes: number;
}