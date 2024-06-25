import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(2)
  first_name: string;

  @IsString()
  @MaxLength(20)
  @MinLength(2)
  last_name: string;

  @IsString()
  @MaxLength(20)
  @MinLength(2)
  password: string;
}

export class ConfirmAttendanceDTO {
  @IsEmail()
  email: string;
}
