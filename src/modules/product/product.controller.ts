import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorator/role';
import { JwtAuthGuard } from 'src/common/guard/guard.routes';
import { RolesGuard } from 'src/common/decorator/role.guard';

@ApiTags('Product')
@Controller('product')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class ProductController {
  constructor(@Inject("IProductService") private readonly productService: ProductService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body(new ValidationPipe()) dto: CreateProductDto) {
    return this.productService.create(dto);
  }
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
