import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() req:LoginAuthDto) {
    const user = await this.authService.validateUser(req.email, req.password);
    console.log(user);
    
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

}



