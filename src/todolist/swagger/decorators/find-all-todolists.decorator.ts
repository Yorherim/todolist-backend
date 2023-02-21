import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';

import { TodolistSwagger } from '../responses/todolist.swagger';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
