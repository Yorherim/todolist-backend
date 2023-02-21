import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodolistModule } from './todolist/todolist.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TodolistModule, TaskModule, PrismaModule],
})
export class AppModule {}
