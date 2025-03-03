import { InjectModel } from "@nestjs/mongoose";
import { CategoryDocument, CategoryEntity } from "./entities/category.entity";
import { ICategoryRepository } from "./interface/user.repoistory";
import { Model } from "mongoose";
import { ID } from "src/common/types";
import { UpdateCategoryDto } from "./dto/update-category.dto";


export class CategoryRepository implements ICategoryRepository {
    constructor(@InjectModel(CategoryEntity.name) private categorytModel: Model<CategoryDocument>){}
    async create(entity: CategoryEntity): Promise<CategoryEntity> {
        const data = await this.categorytModel.create({...entity})        
        return data
    }
    async findAll(): Promise<Array<CategoryEntity>> {
        const data = await this.categorytModel.find()
        return data
    }
    async nameExist(name: string): Promise<CategoryEntity | null> {
        const data = await this.categorytModel.findOne({name})
        return data 
    }
    async update(id: string, dto: UpdateCategoryDto): Promise<CategoryEntity | null> {
        const data =  await this.categorytModel.findByIdAndUpdate(id, dto, { new: true });        
        return data
    }
    
    async delete(id: ID): Promise<CategoryEntity | null> {
        const data = await this.categorytModel.findByIdAndDelete({_id:id})
        return data
    }
    async findById(id: ID): Promise<CategoryEntity | null> {
        const data = await this.categorytModel.findById(id)
        return data
    }
}