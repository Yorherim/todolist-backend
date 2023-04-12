import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { checkValueIsNotSpaces } from '../../../utils/check-value-is-not-spaces';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    type: String,
    description: 'Task title',
    required: true,
    example: 'buy milk',
  })
  @Transform(checkValueIsNotSpaces)
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
    description: 'Todolist id',
    required: true,
    example: '1',
  })
  @IsString()
  @IsNotEmpty()
  todolistId: string;
}
