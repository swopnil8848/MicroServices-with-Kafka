import { NestFactory } from '@nestjs/core';
import { TicketsServiceModule } from './tickets-service.module';
import { ValidationPipe } from '@nestjs/common';
import { SERVICE_PORTS, SERVICES } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(TicketsServiceModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(SERVICE_PORTS[SERVICES.TICKETS_SERVICE]);

  console.log(`Tickets Service running on port : ${SERVICE_PORTS[SERVICES.TICKETS_SERVICE]}`)
}
bootstrap();
