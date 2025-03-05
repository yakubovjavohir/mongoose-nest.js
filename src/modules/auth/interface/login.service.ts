import { ResData } from "src/lib/resData";
import { UserEntity } from "src/modules/user/entities/user.entity";
import { LoginAuthDto } from "../dto/create-auth.dto";

export interface IAuthService {
  login(dto: LoginAuthDto): Promise<ResData<UserEntity>>;
}
