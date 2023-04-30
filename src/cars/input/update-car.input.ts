import { PartialType } from "@nestjs/swagger";
import { CreateCarBoardInput } from './create-car-board.input';

export class UpdateCarInput extends PartialType(CreateCarBoardInput) { }
