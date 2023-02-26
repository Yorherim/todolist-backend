import { ApiProperty } from '@nestjs/swagger';

import { BadRequestSwagger } from '../../../../swagger/400-bad-request.swagger';

export class BadRequestCreateTodolistSwagger extends BadRequestSwagger {
  @ApiProperty({ example: ["Todolist title can't be empty"] })
  message: string[];
}
