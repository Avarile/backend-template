import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ITimetable, ITrigger } from '../interface/timetable.interface';

@Index('timetable_user_id_index', ['user_id'], {})
@Entity({ name: 'timetable' })
export class TimetableEntity extends BaseEntity implements ITimetable {
  @Column({ type: 'int', nullable: false })
  user_id: number;

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
  content: object;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      to: (val: ITrigger) => {
        return JSON.stringify(val);
      },
      from: (val: string) => {
        return JSON.parse(val);
      },
    },
  })
  trigger: ITrigger;

  @Column({ type: 'varchar', length: 200, nullable: true })
  desc: string | null;
}
