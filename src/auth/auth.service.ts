import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../entities/user/user.service';
import { CreateUserDto } from '../entities/user/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async register(body: CreateUserDto) {
    const { password, login, email } = body;
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new ConflictException('Такой пользователь уже зарегистрирован');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    return await this.userService.create({ password: passwordHash, login, email });
  }

  async signIn(body: SignInDto) {
    const user = await this.userService.findOneByEmail(body.email);
    if (!user) {
      throw new BadRequestException('Пользователь с таким email не найден');
    }

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
      throw new BadRequestException('Неверный пароль');
    }

    return {
      token: this.generateAccessToken(user.login, user.id),
    };
  }

  generateAccessToken(login: string, userId: number) {
    const payload = { login, userId };
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: '24h',
    });
  }
}
