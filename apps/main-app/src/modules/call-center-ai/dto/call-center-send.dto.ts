import {
  IsString,
  IsArray,
  IsEnum,
  IsOptional,
  ValidateNested,
  IsEmail,
} from 'class-validator';
import { CallCenterIntentionEnum } from './call-center-send.interface';
import { Type } from 'class-transformer';

export class CallContentDTO {
  @IsString()
  @IsOptional()
  context: string;

  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  time: string;
}

export class CallCenterSendCallDTO {
  @IsString()
  phone_number: string;

  @IsString()
  user_last_name: string;

  @IsEmail()
  user_email: string;

  @ValidateNested()
  @Type(() => CallContentDTO)
  content: CallContentDTO;

  @IsEnum(['reschedule', 'make_appointment', 'confirmation'])
  intention: CallCenterIntentionEnum;
}

// --------------- Get Call Analysis DTO
export class CallCenterGetCallAnalysisDTO {
  @IsString()
  callId: string;

  @IsArray()
  @IsString({ each: true })
  goal: string[];

  @IsArray()
  @IsString({ each: true })
  questions: string[];
}

// --------------- Call ID DTO
export class CallCenterCallIdDTO {
  @IsString()
  call_id: string;
}
