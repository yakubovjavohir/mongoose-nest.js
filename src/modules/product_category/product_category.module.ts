
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategoryController } from './product_category.controller';
import { ProductService } from './product_category.service';
import { ProductCategoryEntity, productCategorySchema } from './entities/product_category.entity';
import { ProductCategoryRepository } from './category.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProductCategoryEntity.name, schema: productCategorySchema }])],
  controllers: [ProductCategoryController],
  providers: [
    {provide:"IProductRepository", useClass:ProductCategoryRepository},
    {provide:"IProductService", useClass:ProductService}
  ]
  
})
export class ProductCategoryModule {}
