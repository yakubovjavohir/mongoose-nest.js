import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

@Controller('file')
export class FileController {
  @UseInterceptors(FileInterceptor('ok'))
  @Post("single")
  async createSingle(
    @UploadedFile() file: Express.Multer.File) {
      
    if(
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/apng" ||
      file.mimetype === "image/avif" || 
      file.mimetype === "image/gif" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svg"){
      await writeFile(
        join(__dirname,  "../../../uploads/images/" + file.originalname),
        file.buffer
      )
    }

    if(
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/mpeg" ||
      file.mimetype === "video/mpkg" ||
      file.mimetype === "video/odp"
    ){
      await writeFile(
        join(__dirname,  "../../../uploads/videos/" + file.originalname),
        file.buffer
      )
    }



    if(
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/zip" ||
      file.mimetype === "application/xml"
    ){
      await writeFile(
        join(__dirname,  "../../../uploads/pdf/" + file.originalname),
        file.buffer
      )
    }
  }
}
