import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { UserRole } from "src/common/enums/userRole.enum"

export class CreateUserDto {
    @ApiProperty({description: 'Userni odi'})
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    password: string

    @ApiProperty({default: 'user@mail.com'})
    @IsEmail()
    email: string

    @ApiProperty({enum: UserRole, default:UserRole.user})
    @IsEnum(UserRole)
    role: UserRole
}
