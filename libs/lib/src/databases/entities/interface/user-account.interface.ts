export interface IUserAccountEntity {
  provider: 'google' | 'facebook';
  provider_id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  user_id: number;
}
