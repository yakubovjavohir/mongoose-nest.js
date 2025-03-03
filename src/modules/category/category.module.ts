
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity, categorySchema } from './entities/category.entity';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: CategoryEntity.name, schema: categorySchema }])],
  controllers: [CategoryController],
  providers: [
    {provide:"ICategoryRepository", useClass:CategoryRepository},
    {provide:"ICategoryService", useClass:CategoryService}
  ]
})
export class CategoryModule {}
