import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodolistModule, TaskModule } from './entities';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TodolistModule, TaskModule, PrismaModule],
})
export class AppModule {}
