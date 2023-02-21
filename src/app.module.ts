import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodolistModule } from './todolist/todolist.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TodolistModule, TaskModule],
})
export class AppModule {}
