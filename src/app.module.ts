import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodolistModule, TaskModule, UserModule } from './entities';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodolistModule,
    TaskModule,
    UserModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
