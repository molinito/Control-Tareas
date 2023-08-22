import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema, Task } from '../schemas/task.schema';


@Module({
  imports: [
        MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
    controllers: [TasksController],
    providers: [TaskService, ],
})
export class TasksModule {}
