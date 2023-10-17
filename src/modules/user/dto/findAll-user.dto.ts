import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class FindAllUserDto {
  @ApiProperty()
  @IsInt()
  page: number

  @ApiProperty()
  @IsInt()
  limit: number

  @ApiProperty({enum: OrderBY, })
  @IsInt()
  orderBy: number
}