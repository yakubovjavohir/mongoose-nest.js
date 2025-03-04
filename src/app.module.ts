import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/task'),UserModule, CategoryModule, ProductModule],
})
export class AppModule {}