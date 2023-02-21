import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // enableShutdownHooks - хук жизненного цикла Nest.js
  // когда срабатывает этот хук - значит приложение останавливает свою работу и закрывается
  // мы подписываемся на этот хук для того, чтобы корректно завершить наше приложение
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
