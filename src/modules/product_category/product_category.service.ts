import { Inject, Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { IProductCategoryService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { ProductCategoryEntity } from './entities/product_category.entity';
import { ProductCategoryRepository } from './category.repository';
import { ID } from 'src/common/types';
import { ProductCategoryNotFound } from './exception/error';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { Types } from 'mongoose';

@Injectable()
export class ProductService implements IProductCategoryService{
  constructor(@Inject("IProductRepository") private readonly productRepository:ProductCategoryRepository){}
  async create(dto: CreateProductCategoryDto): Promise<ResData<ProductCategoryEntity>> {
    const filterData:ProductCategoryEntity = {
      productId: new Types.ObjectId(dto.productId),
      categoryId: new Types.ObjectId(dto.categoryId)
    }
    const data = await this.productRepository.create(filterData)
    const resdata = new ResData<ProductCategoryEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<ProductCategoryEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<ProductCategoryEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async update(id: ID, dto: UpdateProductCategoryDto): Promise<ResData<ProductCategoryEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<ProductCategoryEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<ProductCategoryEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductCategoryNotFound()
    }
    const resdata = new ResData<ProductCategoryEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
