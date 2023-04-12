import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';
import { TodolistResponse, TodolistWithAllFieldsResponse } from './types';

export const getAllTodolists = () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('get all todolists - SUCCESS', async () => {
    return request(app.getHttpServer())
      .get(`/todolist`)
      .expect(200)
      .then((res: request.Response) => {
        const body: TodolistResponse[] = res.body;

        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(2);
        expect(body[0].title).toBe('Buy products');
        expect(body[1].title).toBe('Learn technologies');
      });
  });

  it('get all todolists with properties (id, title) only - SUCCESS', async () => {
    return request(app.getHttpServer())
      .get(`/todolist`)
      .expect(200)
      .then((res: request.Response) => {
        // correct body type - TodolistResponse[]
        // need TodolistWithAllFieldsResponse type for correct type todolist
        // because need to check in response.body -> tasks, createdAt, updatedAt
        const body: TodolistWithAllFieldsResponse[] = res.body;

        expect(body[0].id).toBeDefined();
        expect(body[0].title).toBeDefined();
        expect(body[0].tasks).not.toBeDefined();
        expect(body[0].createdAt).not.toBeDefined();
        expect(body[0].updatedAt).not.toBeDefined();
      });
  });
};
