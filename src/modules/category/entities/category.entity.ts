import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CategoryDocument = HydratedDocument<CategoryEntity>;

@Schema()
export class CategoryEntity {
  @Prop({ type: String, required: true })
  name: string;
}

export const categorySchema = SchemaFactory.createForClass(CategoryEntity);
