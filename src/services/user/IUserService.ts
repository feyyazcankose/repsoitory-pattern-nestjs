import { User } from '@src/entities/User';

export interface IUserService {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
  update(id: number, user: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}

export const USER_SERVICE_TOKEN = 'USER_SERVICE_TOKEN';
