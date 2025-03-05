import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PasswordNotIncorrect } from './exception/error';
import { Roles } from 'src/common/decorator/role';
import { JwtAuthGuard } from 'src/common/guard/guard.routes';
import { RolesGuard } from 'src/common/decorator/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')

export class UserController {
  constructor(@Inject("IUserService") private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body(new ValidationPipe()) dto: CreateUserDto) {

    if(dto.password !== dto.comfirmPassword){
      throw new PasswordNotIncorrect()
    }

    return this.userService.create(dto);
  }

  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
