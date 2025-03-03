import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/common/enums';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop({type:String, required:true})
  fullName:string

  @Prop({type:String, required:true, unique:true})
  email:string

  @Prop({type:String, required:true})
  password:string

  @Prop({type:String, required:true})
  role:Role
}

export const userSchema = SchemaFactory.createForClass(UserEntity);