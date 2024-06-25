import {
  Controller,
  // Body,
  Logger,
  // ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; // FileInterceptor is a function that returns a class decorator that binds a Multer interceptor to the route handler
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer'; // diskStorage is a function that returns a storage engine that saves files to the local file system
import { extname } from 'path'; //  means extention name, extname is a function that returns the extension of a file path

// const storageFile = diskStorage({
//   destination: './tmp/uploads',
//   filename: (req, file, cb) => {
//     const name = file.originalname.split('.')[0];
//     const extension = extname(file.originalname);
//     const uuid = randomUUID();
//     cb(null, `${name}-${uuid}${extension}`);
//   },
// });

const storageConversation = diskStorage({
  destination: './tmp/conversation',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    const uuid = randomUUID();
    cb(null, `${name}-${uuid}${extension}`);
  },
});

@Controller('file-service')
export class FileServiceController {
  private readonly logger = new Logger(FileServiceController.name);
  private storage: typeof diskStorage;
  constructor() {
    this.logger.warn('FileService initialized');
  }

  @Post('audio')
  @UseInterceptors(FileInterceptor('audio', { storage: storageConversation }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      file_name: file.filename,
      file_path: file.path,
      file_size: file.size,
      file_type: file.mimetype,
    };
  }
}
