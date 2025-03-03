import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
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
