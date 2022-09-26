import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, Logger } from '@nestjs/common';
import { setupPassportLocal } from './config/local-passport';
import { setupSwagger } from './config/swagger';
import { LoggingInterceptor } from './client/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './middlewares/http-exception.filter';
import { ConfigService } from '@nestjs/config';
// Import firebase-admin
import * as admin from 'firebase-admin';
import { setupFirebase } from './config/firebase.config';
const logger: Logger = new Logger('Main');
async function bootstrap() {
  // setup Cors
  const appOptions = {
    cors: true,
  };
  const app = await NestFactory.create(AppModule, appOptions);
  const configService: ConfigService = app.get(ConfigService);

  // setup Validate
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // kiểm soát DTO nhận từ client
      exceptionFactory: (error): BadRequestException =>
        new BadRequestException(error),
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new LoggingInterceptor());

  setupPassportLocal(app);

  setupSwagger(app);

  setupFirebase(admin);

  await app.listen(process.env.PORT || 4000);
  logger.log(`App listening on port ${configService.get<string>('PORT')}`);
}
bootstrap();
