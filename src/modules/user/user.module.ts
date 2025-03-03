
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity, userSchema } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: userSchema }])],
  controllers: [UserController],
  providers: [
    {provide:"IUserRepository", useClass:UserRepository},
    {provide:"IUserService", useClass:UserService}
  ]  
})
export class UserModule {}
