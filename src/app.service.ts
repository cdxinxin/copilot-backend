import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! NestJS Backend is running.';
  }

  getHealth(): object {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'NestJS Backend',
      port: 8000,
      message: 'Service is healthy and running'
    };
  }
}
