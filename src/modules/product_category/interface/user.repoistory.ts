import { ID } from "src/common/types";
import { ProductCategoryEntity } from "../entities/product_category.entity";
import { UpdateProductCategoryDto } from "../dto/update-product_category.dto";


export interface IProductCategoryRepository {
    create(entity:ProductCategoryEntity):Promise<ProductCategoryEntity>
    findAll():Promise<Array<ProductCategoryEntity>>
    update(id:ID, dto:UpdateProductCategoryDto):Promise<ProductCategoryEntity | null>
    delete(id:ID):Promise<ProductCategoryEntity | null>
    findById(id:ID):Promise<ProductCategoryEntity | null>
}