import { DataSource, In, IsNull, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InformationEntity } from '../../entities/list/information.entity';

@Injectable()
export class InformationRepository extends Repository<InformationEntity> {
  constructor(private dataSource: DataSource) {
    super(InformationEntity, dataSource.createEntityManager());
  }

  async findByUserID(payload: { user_id: number; with_deleted?: boolean }) {
    return this.findOne({
      where: {
        user_id: payload.user_id,
        deleted_at: payload.with_deleted ? undefined : IsNull(),
      },
    });
  }

  async findByUserIDAndSearchParams(payload: {
    user_id: number;
    tags: number[];
    searchParam?: string; // used for searching by content(when meilisearch is attached)

    skip?: number;
    take?: number;
    with_deleted?: boolean;
  }) {
    // search by date_time in ITrigger
    return this.find({
      where: {
        user_id: payload.user_id,
        tag: In(payload.tags),

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
