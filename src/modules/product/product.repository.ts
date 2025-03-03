import { InjectModel } from "@nestjs/mongoose";
import { ProductDocument, ProductEntity } from "./entities/product.entity";
import { IProductRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/types";


export class ProductRepository implements IProductRepository {
    constructor(@InjectModel(ProductEntity.name) private productModel: Model<ProductDocument>){}
    async create(entity: ProductEntity): Promise<ProductEntity> {
        const data = await this.productModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<ProductEntity>> {
        const data = await this.productModel.find()
        return data
    }
    async nameExist(name: string): Promise<ProductEntity | null> {
        const data = await this.productModel.findOne({name})
        return data 
    }
    async update(id: string, dto: ProductEntity): Promise<ProductEntity | null> {
        const data =  await this.productModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<ProductEntity | null> {
        const data = await this.productModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<ProductEntity | null> {
        const data = await this.productModel.findById(id)
        return data
    }
}