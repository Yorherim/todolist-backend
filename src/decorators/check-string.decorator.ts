import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { checkValueIsNotSpaces } from '../utils/check-value-is-not-spaces';

export const CheckString = (value: string) => {
  return applyDecorators(
    Transform(checkValueIsNotSpaces),
    IsString({ message: `${value} should be string` }),
    IsNotEmpty({ message: `${value} can't be empty` }),
  );
};
