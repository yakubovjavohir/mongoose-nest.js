import { ResData } from "src/lib/resData";
import { ProductCategoryEntity } from "../entities/product_category.entity";
import { ID } from "src/common/types";
import { CreateProductCategoryDto } from "../dto/create-product_category.dto";
import { UpdateProductCategoryDto } from "../dto/update-product_category.dto";

export interface IProductCategoryService {
    create(dto:CreateProductCategoryDto):Promise<ResData<ProductCategoryEntity>>
    findAll():Promise<ResData<Array<ProductCategoryEntity>>>
    update(id:ID, dto:UpdateProductCategoryDto):Promise<ResData<ProductCategoryEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<ProductCategoryEntity>>
}