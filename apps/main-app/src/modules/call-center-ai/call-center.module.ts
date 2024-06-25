import { Module } from '@nestjs/common';
import { CustomFunctionController } from './custom-tool/custom.controller';
import { CallCenterController } from './call-center/call-center.controller';
import { CustomService } from './custom-tool/custom.service';
import { UserService } from '@app/lib/databases/repo-services/user.service';
import { CallCenterService } from './call-center/call-center.service';

@Module({
  imports: [],
  controllers: [CustomFunctionController, CallCenterController],
  providers: [CallCenterService, CustomService, UserService],
})
export class CallCenterModule {}
