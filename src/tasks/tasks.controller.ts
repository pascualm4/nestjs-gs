import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<string> {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return `Updating task ${id}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Deleting task ${id}`;
  }
}
