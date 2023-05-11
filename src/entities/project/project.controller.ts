import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  Req,
} from '@nestjs/common';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { JwtGuard } from '../../guards/jwt.guard';
import { RequestWithUserId } from '../../interfaces/request-with-user-id.interface';

@Controller('project')
@UseGuards(JwtGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto, @Req() req: RequestWithUserId) {
    return this.projectService.create(createProjectDto.title, req.userId);
  }

  @Get()
  findAllByUserId(@Body() body: { userId: string }) {
    return this.projectService.findAllByUserId(body.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: Omit<CreateProjectDto, 'userId'>) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
