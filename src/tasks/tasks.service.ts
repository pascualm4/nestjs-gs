import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/Task';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = await new this.taskModel(task).save();
    console.log(newTask);
    return 'saved';
  }
}
