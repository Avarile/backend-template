import { UserService } from '@app/lib/databases/repo-services/user.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CustomService {
  private readonly logger = new Logger(CustomService.name);
  constructor(private readonly userService: UserService) {}

  async updateUserInfo(payload: any): Promise<any> {
    this.logger.log('Updating user info');

    this.userService.createUser(payload);
    return payload;
  }
}
