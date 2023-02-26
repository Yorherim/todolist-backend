import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { TodolistSwagger } from '../responses/todolist.swagger';

export const ApiGetAllTodolists = () => {
  return applyDecorators(
    ApiOperation({ summary: 'get all todolists' }),
    ApiOkResponse({
      description: 'get all todolists',
      type: TodolistSwagger,
      isArray: true,
    }),
  );
};
