import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ITagEntity } from '../interface/tag.interface';

@Entity({ name: 'tag' })
export class TagEntity extends BaseEntity implements ITagEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  decr?: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  type: string;
}
