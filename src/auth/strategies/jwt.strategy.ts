import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { UserService } from '../../entities/user/user.service';
import { RequestWithUserId } from '../../interfaces/request-with-user-id.interface';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(UserService) private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: any) {
    try {
      const user = await this.userService.findOneById(payload.userId);
      (request as RequestWithUserId).userId = payload.userId;
      return user;
    } catch (error) {
      throw new UnauthorizedException('Пользователь не авторизован');
    }
  }
}
