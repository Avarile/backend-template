import { Module } from '@nestjs/common';
import { FileServiceController } from './file-service.controller';

@Module({
  controllers: [FileServiceController],
  providers: [],
  exports: [],
})
export class FileServiceModule {}
