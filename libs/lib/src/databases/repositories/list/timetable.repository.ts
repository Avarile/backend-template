import { Between, DataSource, IsNull, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TimetableEntity } from '../../entities/list/timetable.entity';

@Injectable()
export class TimetableRepository extends Repository<TimetableEntity> {
  constructor(private dataSource: DataSource) {
    super(TimetableEntity, dataSource.createEntityManager());
  }

  async findByUserID(payload: { user_id: number; with_deleted?: boolean }) {
    return this.findOne({
      where: {
        user_id: payload.user_id,
        deleted_at: payload.with_deleted ? undefined : IsNull(),
      },
    });
  }

  async findByUserIDAndTimetable(payload: {
    user_id: number;
    time: [Date, Date];
    skip?: number;
    take?: number;
    with_deleted?: boolean;
  }) {
    // search by date_time in ITrigger
    return this.find({
      where: {
        user_id: payload.user_id,
        trigger: {
          date_time: Between(payload.time[0], payload.time[1]),
        },
        deleted_at: payload.with_deleted ? undefined : IsNull(),
      },
      take: payload.take || 100,
      skip: payload.skip || 0,
      order: {
        created_at: 'DESC',
      },
    });
  }
}
