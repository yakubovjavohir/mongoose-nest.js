import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({type:String})
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty({type:Number, default:0})
    @IsInt()
    @IsOptional()
    price:number

    @ApiProperty({type:Number, default:0})
    @IsInt()
    @IsOptional()
    count:number
}
