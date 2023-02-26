import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { TodolistSwagger } from '../responses/todolist.swagger';
import { BadRequestCreateTodolistSwagger } from '../responses/400-todolist.swagger';

export const ApiCreateTodolist = () => {
  return applyDecorators(
    ApiOperation({ summary: 'create todolist' }),
    ApiCreatedResponse({
      description: 'todolist created',
      type: TodolistSwagger,
    }),
    ApiBadRequestResponse({
      description: 'bad request - error validate dto',
      type: BadRequestCreateTodolistSwagger,
    }),
  );
};
