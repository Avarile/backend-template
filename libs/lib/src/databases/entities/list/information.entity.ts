import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IInformationEntity } from '../interface/information.interface';

@Entity({ name: 'information_entity' })
export class InformationEntity
  extends BaseEntity
  implements IInformationEntity
{
  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      to: (val: Array<number>) => {
        return JSON.stringify(val);
      },
      from: (val: string) => {
        return JSON.parse(val);
      },
    },
  })
  tag: Array<number>;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      to: (val: Array<number>) => {
        return JSON.stringify(val);
      },
      from: (val: string) => {
        return JSON.parse(val);
      },
    },
  })
  authority: Array<number>; // this is a definition for checking if it will be accessible from a certain user. ["all"] means everyone is accessible

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      to: <T>(val: T) => {
        return JSON.stringify(val);
      },
      from: (val: string) => {
        return JSON.parse(val);
      },
    },
  })
  content: unknown;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  desc: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  user_id: number;
}
