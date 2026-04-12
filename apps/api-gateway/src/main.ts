import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVICE_PORTS, SERVICES } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVICE_PORTS[SERVICES.API_GATEWAY]);
  console.log(`Api Gateway running on port : ${SERVICE_PORTS[SERVICES.API_GATEWAY]}`)
}
bootstrap();
