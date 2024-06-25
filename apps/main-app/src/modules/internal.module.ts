import { Module } from '@nestjs/common';
import { CallCenterModule } from './call-center-ai/call-center.module';
import { FileServiceModule } from './file-service/file-service.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [CallCenterModule, FileServiceModule, OpenaiModule],
  controllers: [],
  providers: [],
})
export class InternalModule {}
