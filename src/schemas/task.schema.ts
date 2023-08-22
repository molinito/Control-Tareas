import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

/* El código anterior define un esquema de datos para una tarea utilizando la biblioteca  `@nestjs/mongoose`  en TypeScript.

El esquema de datos se define utilizando la clase  `Task` , que tiene tres propiedades:  `title` ,  `description`  y  `done` . Cada propiedad está decorada con el decorador  `@Prop` , que proporciona opciones de configuración para esa propiedad.

La propiedad  `title`  es única, requerida y se recorta automáticamente. La propiedad  `description`  se recorta automáticamente. La propiedad  `done`  tiene un valor predeterminado de  `false` .

El decorador  `@Schema`  se aplica a la clase  `Task`  y configura el esquema para que tenga marcas de tiempo habilitadas.

Por último, se exporta el esquema  `TaskSchema`  utilizando el método  `createForClass`  de  `SchemaFactory` , que se utilizará en otros lugares del código para definir y manipular datos de tareas.*/