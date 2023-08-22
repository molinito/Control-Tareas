import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://molinito10:W59NEMHV94RgjUYN@cluster5.5g7s1xl.mongodb.net/'),
    
  TasksModule],
})
export class AppModule {}


/* El código importa los módulos necesarios de NestJS y define un módulo principal llamado AppModule. Este módulo importa el módulo TasksModule, que contiene la lógica relacionada con las tareas. También importa el módulo MongooseModule de NestJS para la conexión con una base de datos MongoDB local llamada tasksdb.

El módulo principal AppModule también define un controlador llamado TaskController y un servicio llamado TaskService. Estos controladores y servicios son proporcionados por el módulo TasksModule.

En resumen, el código configura la estructura básica de la aplicación NestJS, importa los módulos necesarios y define los controladores y servicios correspondientes para manejar las tareas. */
