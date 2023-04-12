import { IsEmail } from 'class-validator';

import { CheckString } from '../../decorators';

export class SignInDto {
  @CheckString('Email')
  @IsEmail({}, { message: 'Email should be correct' })
  email: string;

  @CheckString('Email')
  password: string;
}
