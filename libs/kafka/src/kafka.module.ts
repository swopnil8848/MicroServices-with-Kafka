import { DynamicModule, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_BROKERS, KAFKA_CLIENT_ID, KAFKA_CONSUMER_GROUP } from './constants/kafka.constnts';

export const KAFKA_SERVICE = 'KAFKA_SERVICE'

@Module({})
export class KafkaModule {
  static register(consumerGroup?: string): DynamicModule {
    const clientsModule = ClientsModule.register([
      {
        name: KAFKA_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: KAFKA_CLIENT_ID,
            brokers: KAFKA_BROKERS,
          },
          consumer: {
            groupId: consumerGroup || KAFKA_CONSUMER_GROUP,
          },
        },
      },
    ]);

    return {
      module: KafkaModule,
      imports: [clientsModule],
      exports: [clientsModule],
    };
  }
}
