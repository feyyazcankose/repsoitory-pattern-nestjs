// src/modules/user/user.module.ts

import { Module } from '@nestjs/common';
import { USER_SERVICE_TOKEN } from '@services/user/IUserService';
import { UserService } from '@services/user/UserService';
import { UserRepository } from '@repositories/user/UserRepository';
import { PrismaService } from '@src/prisma/prisma.service';
// import { UserController } from '@controllers/user.controller';
import { USER_REPOSITORY_TOKEN } from '@repositories/user/IUserRepository';

@Module({
  //   controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: USER_SERVICE_TOKEN,
      useClass: UserService,
    },
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
  ],
  exports: [USER_SERVICE_TOKEN],
})
export class UserModule {}
