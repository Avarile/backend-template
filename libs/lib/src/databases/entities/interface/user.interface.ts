import { IAddress, IUserMetadata } from '../list/user.entity';

export interface IUserEntity {
  email: string;
  email_verified: boolean;
  email_verification_token?: string;
  first_name: string;
  last_name: string;
  nick_name?: string;
  password: string;
  postcode?: string;
  mobile?: string;
  title?: string;
  stripe_customer_id?: string;
  stripe_session_id?: string;
  metadata?: IUserMetadata;
  address?: IAddress;
  preferences?: Array<number>;
  tags?: Array<number>;
  is_suspended: boolean;
  test_data?: {
    confirmed: boolean;
  };
}
