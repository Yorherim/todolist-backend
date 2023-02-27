import { Task, Todolist } from '@prisma/client';

export type TodolistResponse = Pick<Todolist, 'id' | 'title'>

export type TodolistWithAllFieldsResponse = Todolist & {
  tasks: Task[]
};
