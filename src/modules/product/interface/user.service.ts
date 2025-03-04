import { ResData } from "src/lib/resData";
import { CreateProductDto } from "../dto/create-product.dto";
import { ProductEntity } from "../entities/product.entity";
import { ID } from "src/common/types";
import { UpdateProductDto } from "../dto/update-product.dto";

export interface IProductService {
    create(dto:CreateProductDto):Promise<ResData<ProductEntity>>
    findAll():Promise<ResData<Array<ProductEntity>>>
    nameExist(name:string):Promise<void>
    update(id:ID, dto:UpdateProductDto):Promise<ResData<ProductEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<ProductEntity>>
}