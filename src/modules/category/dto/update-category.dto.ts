import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty({type:String})
    @IsString()
    @IsOptional()
    name:string

}
