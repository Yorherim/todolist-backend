import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateTodolistDto, UpdateTodolistDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { TaskService } from '../task/task.service';

const selectedTodolistFields: Prisma.TodolistSelect = {
  id: true,
  title: true,
};

@Injectable()
export class TodolistService {
  constructor(private readonly prisma: PrismaService, private readonly taskService: TaskService) {}
  async create(createTodolistDto: CreateTodolistDto) {
    return this.prisma.todolist.create({
      data: {
        title: createTodolistDto.title,
        user: {
          connect: { id: +createTodolistDto.userId },
        },
      },
      select: selectedTodolistFields,
    });
  }

  findAll() {
    return this.prisma.todolist.findMany({
      select: selectedTodolistFields,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    if (isNaN(id)) {
      throw new BadRequestException('Todolist id should be number type');
    }
    const todolist = await this.prisma.todolist.findUnique({ where: { id } });
    if (!todolist) {
      throw new NotFoundException('Todolist not found');
    }
    return todolist;
  }

  async update(id: number, updateTodolistDto: Omit<UpdateTodolistDto, 'userId'>) {
    await this.findOne(id);
    return this.prisma.todolist.update({
      where: { id },
      data: updateTodolistDto,
      select: selectedTodolistFields,
    });
  }

  async removeOneById(id: number) {
    await this.findOne(id);
    const deleteTasks = this.taskService.removeAllByTodolistId(id);
    const deleteTodolist = this.prisma.todolist.delete({ where: { id } });
    await this.prisma.$transaction([deleteTasks, deleteTodolist]);
  }
}
