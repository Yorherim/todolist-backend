import { Injectable } from '@nestjs/common';
import { CreateTodolistDto, UpdateTodolistDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

const selectedFields: Prisma.TodolistSelect = {
  id: true,
  title: true,
};

@Injectable()
export class TodolistService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTodolistDto: CreateTodolistDto) {
    return this.prisma.todolist.create({
      data: createTodolistDto,
      select: selectedFields,
    });
  }

  findAll() {
    return this.prisma.todolist.findMany({
      select: selectedFields,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} todolist`;
  }

  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return `This action updates a #${id} todolist`;
  }

  remove(id: number) {
    return `This action removes a #${id} todolist`;
  }
}
