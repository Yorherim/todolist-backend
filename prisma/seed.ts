import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'Sasha@yandex.ru',
      login: 'Sasha',
      password: await bcrypt.hash('password', 10),
    },
  });

  const todolist1 = await prisma.todolist.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Learn technologies',
      userId: 1,
    },
  });
  const todolist2 = await prisma.todolist.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Buy products',
      userId: 1,
    },
  });

  const task1 = await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'HTML',
      isCompleted: false,
      todolistId: 1,
    },
  });
  const task2 = await prisma.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'CSS',
      isCompleted: false,
      todolistId: 1,
    },
  });
  const task3 = await prisma.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'JS',
      isCompleted: false,
      todolistId: 1,
    },
  });
  const task4 = await prisma.task.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'TS',
      isCompleted: false,
      todolistId: 2,
    },
  });
  const task5 = await prisma.task.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'React',
      isCompleted: false,
      todolistId: 2,
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
