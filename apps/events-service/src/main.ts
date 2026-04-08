import { NestFactory } from '@nestjs/core';
import { EventsServiceModule } from './events-service.module';
import { ValidationPipe } from '@nestjs/common';
import { SERVICE_PORTS, SERVICES } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(EventsServiceModule);

    // Enable Validation
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );

  await app.listen(SERVICE_PORTS[SERVICES.EVENTS_SERVICE]);

  console.log(`Events Service is runnign on port ${SERVICE_PORTS[SERVICES.EVENTS_SERVICE]}`)
}
bootstrap();
