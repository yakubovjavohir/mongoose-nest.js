import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { EmailExist, UserNotFound } from './exception/error';
import { ID } from 'src/common/types';

@Injectable()
export class UserService implements IUserService{
  constructor(@Inject("IUserRepository") private readonly userRepository:UserRepository){}
  async create(dto: CreateUserDto): Promise<ResData<UserEntity>> {
    await this.emailExist(dto.email)
    const filterData:UserEntity = {
      fullName:dto.fullName,
      email:dto.email,
      password:dto.comfirmPassword,
      role:dto.role
    }
    const data = await this.userRepository.create(filterData)
    const resdata = new ResData<UserEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<UserEntity>>> {
    const data = await this.userRepository.findAll()
    const resdata = new ResData<Array<UserEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async emailExist(email: string): Promise<void> {
    const data = await this.userRepository.emailExist(email)
    if(data){
      throw new EmailExist()
    }
  }
  async update(id: ID, dto: UserEntity): Promise<ResData<UserEntity>> {
    await this.findById(id)
    const data = await this.userRepository.update(id, dto)
    const resdata = new ResData<UserEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.userRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<UserEntity>> {
    const data = await this.userRepository.findById(id)
    if(!data){
      throw new UserNotFound()
    }
    const resdata = new ResData<UserEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
