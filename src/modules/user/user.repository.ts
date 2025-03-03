import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, UserEntity } from "./entities/user.entity";
import { IUserRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/types";
import { UpdateUserDto } from "./dto/update-user.dto";


export class UserRepository implements IUserRepository {
    constructor(@InjectModel(UserEntity.name) private userModel: Model<UserDocument>){}
    async create(entity: UserEntity): Promise<UserEntity> {
        const data = await this.userModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<UserEntity>> {
        const data = await this.userModel.find()
        return data
    }
    async emailExist(email: string): Promise<UserEntity | null> {
        const data = await this.userModel.findOne({where : {email}})
        console.log(data);
        return data 
    }
    async update(id: string, dto: UpdateUserDto): Promise<UserEntity | null> {
        const data =  await this.userModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<UserEntity | null> {
        const data = await this.userModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<UserEntity | null> {
        const data = await this.userModel.findById(id)
        return data
    }
}