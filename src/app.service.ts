import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIp(ip: string): string {
    return ip;
  }
}
