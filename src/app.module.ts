import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodolistModule, TaskModule, UserModule } from './entities';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './entities/project/project.module';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodolistModule,
    TaskModule,
    UserModule,
    AuthModule,
    PrismaModule,
    ProjectModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
