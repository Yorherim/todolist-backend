import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { TodolistService } from './todolist.service';
import { CreateTodolistDto } from './dto';
import { ApiGetAllTodolists, ApiCreateTodolist } from './swagger/decorators';
import { ApiTags } from '@nestjs/swagger';

@Controller('todolist')
@ApiTags('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Post()
  @ApiCreateTodolist()
  create(@Body() createTodolistDto: CreateTodolistDto) {
    return this.todolistService.create(createTodolistDto);
  }

  @Get()
  @ApiGetAllTodolists()
  findAll() {
    return this.todolistService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.todolistService.findOne(+id);
  }

  @Patch(':id')
  updateOneById(@Param('id') id: string, @Body() updateTodolistDto: CreateTodolistDto) {
    return this.todolistService.update(+id, updateTodolistDto);
  }

  @Delete(':id')
  removeOneById(@Param('id') id: string) {
    return this.todolistService.removeOneById(+id);
  }
}
