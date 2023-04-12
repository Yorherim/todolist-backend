import { IsBoolean, IsOptional } from 'class-validator';
import { CheckString } from '../../../decorators';

export class UpdateTaskDto {
  @CheckString('Task title')
  @IsOptional()
  title?: string;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
