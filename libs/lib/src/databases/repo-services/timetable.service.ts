import { Injectable, Logger } from '@nestjs/common';
import { TimetableRepository } from '../repositories/list/timetable.repository';
import { ITimetable } from '../entities/interface/timetable.interface';

@Injectable()
export class TimetableService {
  private readonly logger = new Logger(TimetableService.name);
  constructor(private readonly timetableRepo: TimetableRepository) {}

  async reateTimetable(payload: ITimetable) {
    return this.timetableRepo.insert(payload);
  }

  async deleteTimetable(timetable_id: number) {
    return this.timetableRepo.update(timetable_id, { deleted_at: new Date() });
  }

  async updateTimetable(payload: { timetable_id: number; data: ITimetable }) {
    return this.timetableRepo.update(payload.timetable_id, payload.data);
  }

  async getTimetableByUserID(payload: {
    user_id: number;
    with_deleted?: boolean;
  }) {
    return this.timetableRepo.findByUserID(payload);
  }

  async getTimetableByUserIDAndTimetable(payload: {
    user_id: number;
    time: [Date, Date];
    skip?: number;
    take?: number;
    with_deleted?: boolean;
  }) {
    return this.timetableRepo.findByUserIDAndTimetable(payload);
  }
}
