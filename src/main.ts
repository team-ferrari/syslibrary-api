import { NestFactory } from '@nestjs/core';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 5077;
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  await app.listen(PORT);
}
bootstrap();
