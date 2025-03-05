import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ICategoryService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { NameExist, CategoryNotFound } from './exception/error';
import { ID } from 'src/common/types';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService implements ICategoryService{
  constructor(@Inject("ICategoryRepository") private readonly cateogryRepository:CategoryRepository){}
  async create(dto: CreateCategoryDto): Promise<ResData<CategoryEntity>> {
    const category: CategoryEntity = {
      name: dto.name,
    };

    const data = await this.cateogryRepository.create(category);
    return new ResData<CategoryEntity>(201, "Kategoriya yaratildi.", data);
  }
  async findAll(): Promise<ResData<CategoryEntity[]>> {
    const data = await this.cateogryRepository.findAll()
    return new ResData<CategoryEntity[]>(200, "Barcha kategoriyalar olindi.", data);
  }
  async nameExist(name: string): Promise<void> {
    const data = await this.cateogryRepository.nameExist(name)
    if(data){
      throw new NameExist()
    }
  }
  async update(id: ID, dto: UpdateCategoryDto): Promise<ResData<CategoryEntity>> {
    await this.findById(id);
    const data = await this.cateogryRepository.update(id, dto);
    const resdata = new ResData<CategoryEntity>(200, "Ma'lumot yangilandi.", data);
    return resdata;
  }
  
  
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.cateogryRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<CategoryEntity>> {
    const data = await this.cateogryRepository.findById(id)
    if(!data){
      throw new CategoryNotFound()
    }
    const resdata = new ResData<CategoryEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
