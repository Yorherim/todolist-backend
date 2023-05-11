import { Injectable } from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}
  create(title: string, userId: string) {
    return this.prisma.project.create({
      data: {
        title,
        userId: +userId,
      },
      select: {
        id: true,
        title: true,
        userId: true,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.prisma.project.findMany({ where: { userId: +userId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: Omit<CreateProjectDto, 'userId'>) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
