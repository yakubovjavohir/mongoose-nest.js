import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Roles } from 'src/common/decorator/role';
import { JwtAuthGuard } from 'src/common/guard/guard.routes';
import { RolesGuard } from 'src/common/decorator/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('categories')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class CategoryController {
  constructor(@Inject("ICategoryService") private readonly categoryService: CategoryService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body(new ValidationPipe()) dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.categoryService.update(id, dto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
