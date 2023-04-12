import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { FindAllQueryParams } from './interfaces/find-all-query.interface';

const selectedTaskFields: Prisma.TaskSelect = {
  id: true,
  title: true,
  isCompleted: true,
};

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        isCompleted: false,
        todolist: {
          connect: { id: +createTaskDto.todolistId },
        },
      },
      select: selectedTaskFields,
    });
  }

  findAll(query: FindAllQueryParams) {
    if (query.todolistId) {
      if (isNaN(+query.todolistId)) {
        throw new BadRequestException('Todolist id should be number');
      }

      return this.prisma.task.findMany({
        where: { todolistId: +query.todolistId },
        select: selectedTaskFields,
        orderBy: { id: 'asc' },
      });
    }

    return this.prisma.task.findMany({
      select: selectedTaskFields,
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
      select: selectedTaskFields,
    });
  }

  removeAllByTodolistId(todolistId: number) {
    return this.prisma.task.deleteMany({ where: { todolistId } });
  }
}
