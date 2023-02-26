import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateTodolistDto {
  @ApiProperty({
    type: String,
    description: 'Todolist title',
    required: true,
    example: 'What I need to buy',
  })
  @Transform(({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  })
  @IsString({ message: 'Todolist title should be string' })
  @IsNotEmpty({ message: "Todolist title can't be empty" })
  title: string;
}
