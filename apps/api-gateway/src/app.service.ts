import { Injectable } from '@nestjs/common';
import { SERVICE_PORTS, SERVICES } from '@app/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `API Gateway is running on port ${SERVICE_PORTS[SERVICES.API_GATEWAY]}`;
  }
}
