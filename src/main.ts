import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

const PORT = 3333;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  await console.log(
    `Aplikacja wystartowała pod adresem http://localhost:${PORT}/`,
  );
}

bootstrap();
