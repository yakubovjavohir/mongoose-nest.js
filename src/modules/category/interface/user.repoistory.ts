import { ID } from "src/common/types";
import { CategoryEntity } from "../entities/category.entity";
import { UpdateCategoryDto } from "../dto/update-category.dto";


export interface ICategoryRepository {
    create(entity:CategoryEntity):Promise<CategoryEntity>
    findAll():Promise<Array<CategoryEntity>>
    nameExist(name:string):Promise<CategoryEntity | null>
    update(id:ID, dto:UpdateCategoryDto):Promise<CategoryEntity | null>
    delete(id:ID):Promise<CategoryEntity | null>
    findById(id:ID):Promise<CategoryEntity | null>
}