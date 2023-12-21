import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) { }

  async create(createTaskInput: CreateTaskInput) {
    this.taskRepository.insert(createTaskInput);
    return createTaskInput;
  }

  async findAll() {
    return await this.taskRepository.find({});
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ TaskID: id });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    this.taskRepository.update({ TaskID: id }, updateTaskInput);
    return updateTaskInput;
  }

  async remove(id: number) {
    let task_removed = await this.taskRepository.findOneBy({ TaskID: id });
    this.taskRepository.delete({ TaskID: id });
    return task_removed
  }
}
