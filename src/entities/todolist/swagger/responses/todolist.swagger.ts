import { ApiProperty } from '@nestjs/swagger';

export class TodolistSwagger {
  @ApiProperty({ example: 1 })
  id: string;

  @ApiProperty({ example: 'What I need to buy' })
  title: string;
}
