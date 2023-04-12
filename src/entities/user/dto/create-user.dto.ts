import { IsEmail } from 'class-validator';
import { CheckString } from '../../../decorators';

// TODO: добавить Swagger
export class CreateUserDto {
  @CheckString('Email')
  @IsEmail({}, { message: 'Email should be correct' })
  email: string;

  @CheckString('Password')
  password: string;

  @CheckString('Login')
  login: string;
}