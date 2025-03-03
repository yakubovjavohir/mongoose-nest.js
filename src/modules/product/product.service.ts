import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { NameExist, ProductNotFound } from './exception/error';
import { ID } from 'src/common/types';

@Injectable()
export class ProductService implements IProductService{
  constructor(@Inject("IProductRepository") private readonly productRepository:ProductRepository){}
  async create(dto: CreateProductDto): Promise<ResData<ProductEntity>> {
    await this.nameExist(dto.name)
    const filterData:ProductEntity = {
      name:dto.name,
      price:dto.price,
      count:dto.count
    }
    const data = await this.productRepository.create(filterData)
    const resdata = new ResData<ProductEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<ProductEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<ProductEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async nameExist(name: string): Promise<void> {
    const data = await this.productRepository.nameExist(name)
    if(data){
      throw new NameExist()
    }
  }
  async update(id: ID, dto: ProductEntity): Promise<ResData<ProductEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<ProductEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<ProductEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductNotFound()
    }
    const resdata = new ResData<ProductEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
