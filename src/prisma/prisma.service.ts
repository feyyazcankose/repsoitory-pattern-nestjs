// src/prisma/prisma.service.ts

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Eğer transaction işlemlerine ihtiyaç varsa, burada bir transaction methodu da ekleyebilirsiniz
  async transaction<T>(
    actions: (prisma: PrismaClient) => Promise<T>,
  ): Promise<T> {
    return this.$transaction((prisma) => actions(prisma));
  }
}
