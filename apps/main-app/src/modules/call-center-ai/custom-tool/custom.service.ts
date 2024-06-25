import { UserService } from '@app/lib/databases/repo-services/user.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CustomService {
  private readonly logger = new Logger(CustomService.name);
  constructor(private readonly userService: UserService) {}

  async createUserInfo({
    email,
    first_name,
    last_name,
    password,
  }): Promise<any> {
    this.logger.log('Creating user info');

    const new_user = await this.userService.createUser({
      email,
      first_name,
      last_name,
      password,
    });
    return new_user;
  }

  async confirmAttendance(email: string): Promise<{
    attendence_confirmed: boolean;
    user_name: string;
    date: Date;
    time: Date;
  }> {
    const user = await this.userService.getUserByEmail(email);

    this.logger.log('Confirming user attendance');

    this.userService.updateUser(user.id, {
      test_data: {
        confirmed: true,
      },
    });
    return {
      attendence_confirmed: true,
      user_name: user.last_name,
      date: new Date(),
      time: new Date(),
    };
  }
}
