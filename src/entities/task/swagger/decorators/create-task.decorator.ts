import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { CreateTask201, CreateTask400 } from '../responses';

export const ApiCreateTask = () => {
  return applyDecorators(
    ApiOperation({ summary: 'create task' }),
    ApiCreatedResponse({
      description: 'task created',
      type: CreateTask201,
    }),
    ApiBadRequestResponse({
      description: 'bad request - error validate dto',
      type: CreateTask400,
    }),
  );
};
