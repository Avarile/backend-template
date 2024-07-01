import { Injectable, Logger } from '@nestjs/common';
import { InformationRepository } from '../repositories/list/information.repository';
import { IInformationEntity } from '../entities/interface/information.interface';

@Injectable()
export class InformationService {
  private readonly logger = new Logger(InformationService.name);
  constructor(private readonly informationRepo: InformationRepository) {}

  async createInformation(payload: IInformationEntity) {
    return this.informationRepo.insert(payload);
  }

  async deleteInformation(payload: { id: number }) {
    return this.informationRepo.update(payload.id, { deleted_at: new Date() });
  }

  async updateInformation(payload: {
    id: number;
    data: Partial<IInformationEntity>;
  }) {
    return this.informationRepo.update(payload.id, payload.data);
  }

  async queryInformation(payload: {
    user_id: number;
    tags: number[];
    searchParam?: string;
    skip?: number;
    take?: number;
    with_deleted?: boolean;
  }) {
    return this.informationRepo.findByUserIDAndSearchParams(payload);
  }
}
