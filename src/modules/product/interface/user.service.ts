import { ResData } from "src/lib/resData";
import { CreateProductDto } from "../dto/create-product.dto";
import { ProductEntity } from "../entities/product.entity";
import { ID } from "src/common/types";

export interface IProductService {
    create(dto:ProductEntity):Promise<ResData<ProductEntity>>
    findAll():Promise<ResData<Array<ProductEntity>>>
    nameExist(name:string):Promise<void>
    update(id:ID, dto:ProductEntity):Promise<ResData<ProductEntity>>
    delete(id:ID):Promise<ResData<void>>
    findById(id:ID):Promise<ResData<ProductEntity>>
}