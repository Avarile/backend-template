export interface IRoleEntity {
  name: string;
  decr: string | null;
  is_active: boolean;
  notes: string | null;
  expires_at: Date | null;
}
