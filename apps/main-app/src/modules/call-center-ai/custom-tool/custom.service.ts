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
    const exist = await this.userService.verifyUserExistByEmail(email);
    if (exist) {
      return {
        message: 'User already exist',
      };
    }

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

  async getCalendarInfo(): Promise<any> {
    this.logger.log('Getting calendar info');

    return {
      empty1: 'July 7th, 2:00 PM',
      empty2: 'July 8th, 10:00 AM',
      empty3: 'July 14th, 10:00 AM',
    };
  }
}
