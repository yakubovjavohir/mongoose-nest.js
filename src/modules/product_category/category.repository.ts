import { InjectModel } from "@nestjs/mongoose";
import { ProductCategoryDocument, ProductCategoryEntity } from "./entities/product_category.entity";
import { IProductCategoryRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/types";
import { UpdateProductCategoryDto } from "./dto/update-product_category.dto";


export class ProductCategoryRepository implements IProductCategoryRepository {
    constructor(@InjectModel(ProductCategoryEntity.name) private productCategorytModel: Model<ProductCategoryDocument>){}
    async create(entity: ProductCategoryEntity): Promise<ProductCategoryEntity> {
        const data = await this.productCategorytModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<ProductCategoryEntity>> {
        const data = await this.productCategorytModel.find().populate("productId").populate("categoryId")
        return data
    }
    async update(id: string, dto: UpdateProductCategoryDto): Promise<ProductCategoryEntity | null> {
        const data =  await this.productCategorytModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    async delete(id: ID): Promise<ProductCategoryEntity | null> {
        const data = await this.productCategorytModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<ProductCategoryEntity | null> {
        const data = await this.productCategorytModel.findById(id)
        return data
    }
}