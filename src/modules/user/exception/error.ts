import { HttpException, HttpStatus } from "@nestjs/common";

export class PasswordNotIncorrect extends HttpException {
    constructor(){
        super("password va comfirmPassword bir biriga mos kelmayabdi!", HttpStatus.BAD_REQUEST)
    }
}

export class EmailExist extends HttpException {
    constructor(){
        super("Bu email mavjud boshqa email kiriting!", HttpStatus.BAD_REQUEST)
    }
}

export class UserNotFound extends HttpException{
    constructor(){
        super("Bunday user topilmadi!", HttpStatus.NOT_FOUND)
    }
}