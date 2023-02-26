import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const tasks = {
    ['todolist1']: [
      {
        title: 'HTML',
        isCompleted: false,
      },
      {
        title: 'CSS',
        isCompleted: false,
      },
      {
        title: 'React',
        isCompleted: false,
      },
    ],
    ['todolist2']: [
      {
        title: 'Milk',
        isCompleted: false,
      },
      {
        title: 'apples',
        isCompleted: false,
      },
    ],
  };

  // create two todolists with tasks
  const todolist1 = await prisma.todolist.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Learn technologies',
      tasks: {
        createMany: {
          data: [...tasks.todolist1],
        },
      },
    },
  });

  const todolist2 = await prisma.todolist.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Buy products',
      tasks: {
        createMany: {
          data: [...tasks.todolist2],
        },
      },
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
