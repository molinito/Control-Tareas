import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();// para que se pueda acceder desde cualquier lado
  app.setGlobalPrefix('api');// para que todas las rutas tengan el prefijo api
  app.useGlobalPipes(new ValidationPipe());// para que se pueda validar los datos que se envian
  await app.listen(3002);
}
bootstrap();
