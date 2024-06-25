import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CustomService } from './custom.service';
import { ConfirmAttendanceDTO } from '../dto/custom-tool.dto';

@Controller('custom-function')
export class CustomFunctionController {
  private readonly logger = new Logger(CustomFunctionController.name);
  constructor(private readonly customToolService: CustomService) {}

  // @Post('create-user')
  // async createUserInfoAction(@Body() body: any): Promise<any> {
  //   this.logger.log('Creating user info');

  //   const response = await this.customToolService.updateUserInfo(body);

  //   this.logger.log('User info created');
  //   return response;
  // }

  // @Post('update-user')
  // async updateUserInfoAction(@Body() body: any): Promise<any> {
  //   this.logger.log('Updating user info');

  //   const response = await this.customToolService.updateUserInfo(body);

  //   this.logger.log('User info updated');
  //   return response;
  // }

  @Post('confirmation')
  async confirmationAction(@Body() body: ConfirmAttendanceDTO): Promise<{
    attendence_confirmed: boolean;
    user_name: string;
    date: Date;
    time: Date;
  }> {
    this.logger.log('Updating user info');

    const response = await this.customToolService.confirmAttendance(body.email);

    this.logger.log('User info updated');
    return response;
  }
}
