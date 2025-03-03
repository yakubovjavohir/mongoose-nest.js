import { HttpException, HttpStatus } from "@nestjs/common";

export class NameExist extends HttpException {
    constructor(){
        super("Bunday category mavjud!", HttpStatus.BAD_REQUEST)
    }
}

export class CategoryNotFound extends HttpException{
    constructor(){
        super("Bunday category topilmadi!", HttpStatus.NOT_FOUND)
    }
}