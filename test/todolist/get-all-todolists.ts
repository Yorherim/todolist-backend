import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';

export const getAllTodolists = () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    //app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  console.log('app1', app);

  it('find all todolists - SUCCESS', async () => {
    return request(app.getHttpServer())
      .get(`/todolist`)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(2);
        expect(body[0].title).toBe('Learn technologies');
        expect(body[1].title).toBe('Buy products');
      });
  });
};
