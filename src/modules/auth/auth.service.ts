import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject("IUserService") private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const {data} = await this.usersService.email(email);
    
    if (data && data?.password === pass) {
      const { password, ...result } = data
      return result;
    }
    return null;
  }


  async login(user: any) {    
    console.log('User object before signing token:', user);
    const payload = { 
      username: user._doc.username, 
      sub: user._doc.id, 
      role: user._doc.role 
    };
  
    const token = this.jwtService.sign(payload);
    console.log('Generated Token:', token);
  
    return {
      access_token: token,
    };
  }
  
}

