import { ID } from "src/common/types";
import { ProductEntity } from "../entities/product.entity";
import { UpdateProductDto } from "../dto/update-product.dto";


export interface IProductRepository {
    create(entity:ProductEntity):Promise<ProductEntity>
    findAll():Promise<Array<ProductEntity>>
    nameExist(name:string):Promise<ProductEntity | null>
    update(id:ID, dto:UpdateProductDto):Promise<ProductEntity | null>
    delete(id:ID):Promise<ProductEntity | null>
    findById(id:ID):Promise<ProductEntity | null>
}