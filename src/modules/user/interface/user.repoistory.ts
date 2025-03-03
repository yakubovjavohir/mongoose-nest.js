import { ID } from "src/common/types";
import { UserEntity } from "../entities/user.entity";


export interface IUserRepository {
    create(entity:UserEntity):Promise<UserEntity>
    findAll():Promise<Array<UserEntity>>
    emailExist(email:string):Promise<UserEntity | null>
    update(id:ID, dto:UserEntity):Promise<UserEntity | null>
    delete(id:ID):Promise<UserEntity | null>
    findById(id:ID):Promise<UserEntity | null>
}