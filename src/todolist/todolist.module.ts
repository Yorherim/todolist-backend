import { Module } from '@nestjs/common';

import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TodolistController],
  providers: [TodolistService],
  imports: [PrismaModule],
})
export class TodolistModule {}
