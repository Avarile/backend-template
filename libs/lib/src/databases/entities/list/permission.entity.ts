import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

export interface IPermissionMeta {
  api: Array<string>;
  page: Array<string>;
  action: Array<string>;
}

@Entity({ name: 'permission' })
export class PermissionEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  decr: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'text',
    nullable: true,
    transformer: {
      to: (value: IPermissionMeta | null) => JSON.stringify(value),
      from: (value: string): Promise<IPermissionMeta | null> =>
        JSON.parse(value),
    },
  })
  meta?: IPermissionMeta;
}
