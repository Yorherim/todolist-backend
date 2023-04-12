import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../entities/user/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('registration')
  async register(@Body() body: CreateUserDto) {
    return await this.authService.register(body);
  }

  @Post('signIn')
  @HttpCode(200)
  async signIn(@Body() body: SignInDto) {
    return await this.authService.signIn(body);
  }
}
