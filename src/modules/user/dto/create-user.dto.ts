import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Role } from "src/common/enums";

export class CreateUserDto {
    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    fullName:string

    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    password:string

    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    comfirmPassword:string

    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    role:Role
}
