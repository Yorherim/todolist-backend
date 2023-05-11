import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { checkValueIsNotSpaces } from '../../../utils/check-value-is-not-spaces';

export class CreateProjectDto {
  @Transform(checkValueIsNotSpaces)
  @IsString()
  @IsNotEmpty()
  title: string;
}
