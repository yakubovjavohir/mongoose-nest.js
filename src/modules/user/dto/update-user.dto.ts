import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { Role } from "src/common/enums";

export class UpdateUserDto {
    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    fullName:string

    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    @IsEmail()
    email:string

    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    password:string

    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    role:Role
}
