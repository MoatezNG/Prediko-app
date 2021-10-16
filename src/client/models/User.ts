import { ISelectorOption } from 'client/types/ISelectorOption';

export type Role = 'Regular user' | 'Administrator';
export interface User {
  firstname: string;
  lastname: string;
  email: string;
  role: Role | ISelectorOption<Role>;
}
