import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class UpdateProductCategoryDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    categoryId:string

    @ApiProperty({ type: String })
    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    productId:string
}
