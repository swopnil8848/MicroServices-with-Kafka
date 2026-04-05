import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { KAFKA_SERVICE, KAFKA_TOPICS } from '@app/kafka';
import { ClientKafka } from '@nestjs/microservices';
import { timeStamp } from 'console';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor
    (@Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka) { }

  async onModuleInit() {
    // connect to kafka when the mdoule is initlized
    await this.kafkaClient.connect();
  }

  getHello(): string {
    return "helow world"
  }

  async similateUserRegistration(email: string) {
    //publish events 
    this.kafkaClient.emit(KAFKA_TOPICS.USER_REGISTERED, {
      email,
      timeStamp: new Date().toISOString(),
    });

    return { message: `User regitered: ${email}` };
  }
}
