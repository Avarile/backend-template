import { RBACService } from './rbac.service';
import { UserService } from './user.service';
import { OpenAIAccountService } from './openai-account.service';
import { AuthService } from './auth.service';
import { InformationService } from './information.service';
import { TimetableService } from './timetable.service';

export const BUSINESS_SERVICES = [
  AuthService,
  UserService,
  RBACService,
  OpenAIAccountService,
  InformationService,
  TimetableService,
];
