import { ResData } from "src/lib/resData";
import { CategoryEntity } from "../entities/category.entity";
import { ID } from "src/common/types";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface ICategoryService {
    create(dto:CreateCategoryDto):Promise<ResData<CategoryEntity>>
    findAll():Promise<ResData<Array<CategoryEntity>>>
    nameExist(name:string):Promise<void>
    update(id:ID, dto:UpdateCategoryDto):Promise<ResData<CategoryEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<CategoryEntity>>
}