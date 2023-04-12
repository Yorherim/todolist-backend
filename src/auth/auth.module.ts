import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../entities';

@Module({
  imports: [JwtModule, UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
