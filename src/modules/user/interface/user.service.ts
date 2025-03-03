import { ResData } from "src/lib/resData";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";
import { ID } from "src/common/types";

export interface IUserService {
    create(dto:CreateUserDto):Promise<ResData<UserEntity>>
    findAll():Promise<ResData<Array<UserEntity>>>
    emailExist(email:string):Promise<void>
    update(id:ID, dto:UserEntity):Promise<ResData<UserEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<UserEntity>>
}