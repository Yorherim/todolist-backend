import { Injectable } from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodolistService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTodolistDto: CreateTodolistDto) {
    return 'This action adds a new todolist';
  }

  findAll() {
    return this.prisma.todolist.findMany();
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
