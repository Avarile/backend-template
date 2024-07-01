import { IBaseEntity } from './base.interface';

export interface IInformationEntity extends IBaseEntity {
  tag: Array<number>;
  authority: Array<number>; // this is a definition for checking if it will be accessible from a certain user.
  content: unknown;
  desc?: string;
  user_id: number;
}
