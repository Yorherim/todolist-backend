import { ApiProperty } from '@nestjs/swagger';

import { BadRequestSwagger } from '../../../../swagger/400-bad-request.swagger';

export class CreateTask201 {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'buy milk' })
  title: string;

  @ApiProperty({ example: false })
  isCompleted: boolean;
}

export class CreateTask400 extends BadRequestSwagger {
  @ApiProperty({ example: ["Task title can't be empty"] })
  message: string[];
}
