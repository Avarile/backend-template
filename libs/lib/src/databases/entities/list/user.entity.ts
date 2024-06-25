import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IUserEntity } from '../interface/user.interface';

export interface IUserMetadata {
  avatar?: string;
  age?: number;
  last_login: Date;
  tutorial_completed: boolean;
}

export interface IAddress {
  postcode?: string;
  area?: string;
  state?: string;
  country?: string;
  googleAddress?: string; // google auto complete address
}

@Index('user_email', ['email'], { unique: true })
@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUserEntity {
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  email_verified: boolean;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  email_verification_token?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  nick_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  postcode?: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  mobile?: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  title?: string;

  // 3rd party platform user fields
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  stripe_customer_id?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  stripe_session_id?: string;

  @Column({
    type: 'text',
    nullable: true,
    transformer: {
      to: (value: IUserMetadata) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  metadata?: IUserMetadata;

  @Column({
    type: 'text',
    nullable: true,
    transformer: {
      to: (value: IAddress) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  address?: IAddress;

  @Column({
    type: 'simple-array',
    nullable: false,
    comment: 'user preferences',
    default: '[]',
  })
  preferences: Array<number>;

  @Column({
    type: 'simple-array',
    nullable: false,
    comment: 'user taglist',
    default: '[]',
  })
  tags: Array<number>;

  @Column({
    type: 'bool',
    default: false,
  })
  is_suspended: boolean;

  @Column({
    type: 'text',
    nullable: true,
    transformer: {
      to: (value: { confirmed: boolean }) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  test_data?: {
    confirmed: boolean;
  };
}
