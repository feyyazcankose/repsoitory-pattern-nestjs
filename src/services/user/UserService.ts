import { Injectable } from '@nestjs/common';
import { User } from '@src/entities/User';
import { IUserService } from '@src/services/user/IUserService';
import { IUserRepository } from '@src/repositories/user/IUserRepository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  update(id: number, user: Partial<User>): Promise<User> {
    return this.userRepository.update(id, user);
  }

  delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
