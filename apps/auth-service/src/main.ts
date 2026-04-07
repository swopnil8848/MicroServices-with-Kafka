import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICE_PORTS, SERVICES } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  // Enable Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(SERVICE_PORTS[SERVICES.AUTH_SERVICE]);
  console.log(`Auth service is rinning on port ${SERVICE_PORTS[SERVICES.AUTH_SERVICE]}`)
}
bootstrap();
