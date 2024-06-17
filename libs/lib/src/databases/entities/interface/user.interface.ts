import { IAddress, IUserMetadata } from '../list/user.entity';

export interface IUserEntity {
  email: string;
  email_verified: boolean;
  email_verification_token?: string;
  first_name: string | null;
  last_name: string | null;
  nick_name: string | null;
  password: string;
  postcode?: string;
  mobile: string | null;
  title: string | null;
  stripe_customer_id: string | null;
  stripe_session_id?: string;
  metadata: IUserMetadata;
  address: IAddress;
  preferences: Array<number>;
  tags: Array<number>;
  is_suspended: boolean;
}
