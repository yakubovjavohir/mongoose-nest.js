import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';

export type ProductCategoryDocument = HydratedDocument<ProductCategoryEntity>;

@Schema()
export class ProductCategoryEntity {
    @Prop({ type: Types.ObjectId, ref: 'ProductEntity' })  
    productId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'CategoryEntity' })  
    categoryId: Types.ObjectId;
}

export const productCategorySchema = SchemaFactory.createForClass(ProductCategoryEntity);
