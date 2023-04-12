import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';
import { TodolistResponse } from './types';

export const createTodolist = () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('create todolist', () => {
    it('create todolist - SUCCESS', async () => {
      return request(app.getHttpServer())
        .post(`/todolist`)
        .send({ title: 'Hellou' })
        .expect(201)
        .then((res: request.Response) => {
          const body: TodolistResponse = res.body;

          expect(body.id).toBeDefined();
          expect(body.title).toBe('Hellou');
        });
    });

    it('created todolist should be added in todolist array', async () => {
      return request(app.getHttpServer())
        .get(`/todolist`)
        .expect(200)
        .then(({ body }: request.Response) => {
          expect(Array.isArray(body)).toBeTruthy();
          expect(body).toHaveLength(3);
        });
    });
  });

  describe('create todolist validate dto', () => {
    it("Bad request (400) - Todolist title can't be empty", async () => {
      return request(app.getHttpServer())
        .post(`/todolist`)
        .send({ title: '' })
        .expect(400)
        .then(({ body }: request.Response) => {
          expect(body.message[0]).toBe("Todolist title can't be empty");
        });
    });

    it("Bad request (400) - Todolist title can't be empty", async () => {
      return request(app.getHttpServer())
        .post(`/todolist`)
        .send({ title: '     ' })
        .expect(400)
        .then(({ body }: request.Response) => {
          expect(body.message[0]).toBe("Todolist title can't be empty");
        });
    });

    it('Bad request (400) - Todolist title should be string', async () => {
      return request(app.getHttpServer())
        .post(`/todolist`)
        .send({ title: 5 })
        .expect(400)
        .then(({ body }: request.Response) => {
          expect(body.message[0]).toBe('Todolist title should be string');
        });
    });
  });
};
