import { ApiProperty } from '@nestjs/swagger';

import { BadRequestSwagger } from '../../../../swagger/400-bad-request.swagger';
import { CreateTask201 } from './create-task';

export class GetTasks200 extends CreateTask201 {}

export class GetTasks400 extends BadRequestSwagger {
  @ApiProperty({ example: ['Todolist id should be number'] })
  message: string[];
}
