import { ApiProperty } from '@nestjs/swagger';

import { CheckString } from '../../../decorators';

export class CreateTodolistDto {
  @ApiProperty({
    type: String,
    description: 'Todolist title',
    required: true,
    example: 'What I need to buy',
  })
  @CheckString('Todolist title')
  title: string;

  @CheckString('userId')
  userId: string;
}
