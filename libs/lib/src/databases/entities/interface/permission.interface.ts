import { IPermissionMeta } from '../list/permission.entity';

export interface IPermissionEntity {
  name: string;
  decr: string | null;
  is_active: boolean;
  meta: IPermissionMeta;
}
