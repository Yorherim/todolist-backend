import { getAllTodolists } from './get-all-todolists';
import { createTodolist } from './create-todolist';

describe('todolist', () => {
  describe('get all todolists (GET)', getAllTodolists);
  describe('create todolist (POST)', createTodolist);
});
