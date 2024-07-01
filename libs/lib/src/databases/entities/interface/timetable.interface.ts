import { IBaseEntity } from './base.interface';

export enum TriggerType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
  ONCE = 'once',
}

export interface ITrigger {
  date_time: Date;
  trigger_type: TriggerType;
  repeat: number;
  trigger_keyword: Array<string>;
}

export interface ITimetable extends IBaseEntity {
  user_id: number;
  content: object;
  trigger: ITrigger;
  desc?: string | null;
}
