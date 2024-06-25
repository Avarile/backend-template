import { IsEmail } from 'class-validator';

export class ConfirmAttendanceDTO {
  @IsEmail()
  email: string;
}
