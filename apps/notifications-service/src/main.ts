import { NestFactory } from '@nestjs/core';
import { NotificationsServiceModule } from './notifications-service.module';
import { Transport } from '@nestjs/microservices';
import { KAFKA_BROKER, KAFKA_CLIENT_ID } from '@app/kafka';
import { SERVICE_PORTS, SERVICES } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsServiceModule);

  // connect kafka microservices for consuming  events
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      clinet: {
        clientId: `${KAFKA_CLIENT_ID}-notifications`,
        brokers: [KAFKA_BROKER],
      },
      consumer: {
        groupId: `notifications-consumer-group`
      }
    }
  })

  // start microservices (kafka consumer)
  await app.startAllMicroservices();

  await app.listen(SERVICE_PORTS[SERVICES.NOTIFICATIONS_SERVICE]);

  console.log(`Notification Service running on port ${SERVICE_PORTS[SERVICES.NOTIFICATIONS_SERVICE]}`)

  console.log('Kafka Consumer Started');
}
bootstrap();
