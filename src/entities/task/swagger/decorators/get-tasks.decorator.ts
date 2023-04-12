import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';

import { GetTasks200, GetTasks400 } from '../responses';

export const ApiGetTasks = () => {
  return applyDecorators(
    ApiOperation({ summary: 'create task' }),
    ApiQuery({
      name: 'todolistId',
      type: 'string',
      required: false,
    }),
    ApiOkResponse({
      description: 'get tasks',
      type: GetTasks200,
      isArray: true,
    }),
    ApiBadRequestResponse({
      description: 'bad request',
      type: GetTasks400,
    }),
  );
};
