import { Module } from '@nestjs/common';

import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { TaskModule } from '../task/task.module';

@Module({
  controllers: [TodolistController],
  providers: [TodolistService],
  imports: [PrismaModule, TaskModule],
})
export class TodolistModule {}
