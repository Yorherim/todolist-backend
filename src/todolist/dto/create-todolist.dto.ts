import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodolistDto {
  @ApiProperty({ type: String, description: 'Todolist title', required: true })
  @IsString({ message: 'Todolist title should be string' })
  @IsNotEmpty({ message: "Todolist title can't be empty" })
  title: string;
}
