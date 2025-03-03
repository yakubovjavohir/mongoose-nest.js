import { HttpException, HttpStatus } from "@nestjs/common";

export class NameExist extends HttpException {
    constructor(){
        super("Bunday product mavjud!", HttpStatus.BAD_REQUEST)
    }
}

export class ProductNotFound extends HttpException{
    constructor(){
        super("Bunday product topilmadi!", HttpStatus.NOT_FOUND)
    }
}