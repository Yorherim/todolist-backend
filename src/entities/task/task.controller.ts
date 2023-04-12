import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FindAllQueryParams } from './interfaces/find-all-query.interface';
import { ApiCreateTask, ApiGetTasks } from './swagger/decorators';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiCreateTask()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiGetTasks()
  findAll(@Query() query: FindAllQueryParams) {
    return this.taskService.findAll(query);
  }

  @Get(':taskId')
  findOne(@Param('taskId') taskId: string) {
    return this.taskService.findOne(+taskId);
  }

  @Patch(':taskId')
  update(@Param('taskId') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+taskId, updateTaskDto);
  }

  @Delete(':todolistId')
  removeAllTasksByTodolistId(@Param('todolistId') todolistId: string) {
    return this.taskService.removeAllByTodolistId(+todolistId);
  }
}
