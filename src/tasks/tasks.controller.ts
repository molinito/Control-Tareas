import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('task') // task viene de la ruta que se pone en el app.module.ts
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.taskService.findOne(id);
    if(!task) throw new NotFoundException('No existe la tarea');
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.taskService.create(body);
    } catch (error) {
        if(error.code === 11000){
          throw new ConflictException('Ya existe una tarea con ese nombre');
        }
        throw error;
    }
    return this.taskService.create(body);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.taskService.findOne(id);
    if(!task) throw new NotFoundException('No existe la tarea');
    return this.taskService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateTaskDto) {
    const task = await this.taskService.findOne(id);
    if(!task) throw new NotFoundException('No existe la tarea');
    return this.taskService.update(id, body);
  }
}
