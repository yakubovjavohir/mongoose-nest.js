import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductEntity>;

@Schema()
export class ProductEntity {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, unique: true })
  price: number;

  @Prop({ type: Number })
  count: number;
}

export const productSchema = SchemaFactory.createForClass(ProductEntity);
