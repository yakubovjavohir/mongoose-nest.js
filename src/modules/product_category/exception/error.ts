import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductCategoryNotFound extends HttpException{
    constructor(){
        super("product bilan category bog'lanmagan", HttpStatus.NOT_FOUND)
    }
}