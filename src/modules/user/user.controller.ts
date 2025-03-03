import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PasswordNotIncorrect } from './exception/error';

@Controller('user')
export class UserController {
  constructor(@Inject("IUserService") private readonly userService: UserService) {}

  @Post()
  create(@Body(new ValidationPipe()) dto: CreateUserDto) {

    if(dto.password !== dto.comfirmPassword){
      throw new PasswordNotIncorrect()
    }

    return this.userService.create(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
