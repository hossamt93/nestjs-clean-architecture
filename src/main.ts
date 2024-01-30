import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './external-frameworks/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const port = Number.parseInt(process.env.PORT) || 3000;
  setupSwagger(app);
  await app.listen(port);
}
bootstrap();
