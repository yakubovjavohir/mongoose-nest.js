import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';

export type ProductDocument = HydratedDocument<ProductEntity>;

@Schema()
export class ProductEntity {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, unique: true })
  price: number;

  @Prop({ type: Number })
  count: number;

  @Prop({ type: Types.ObjectId, ref: 'CategoryEntity' })  
  categoryId: Types.ObjectId;
}

export const productSchema = SchemaFactory.createForClass(ProductEntity);
