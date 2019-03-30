import { Injectable } from '@nestjs/common';
import * as Redis from "ioredis";

@Injectable()
export class ProbeService {
  client: Redis.Redis;
  prefix: string = 'TempHumidEntries';

  constructor() {
    this.client = new Redis({ host: 'localhost', port: 6379, db: 0 });
  }

  getEntryString() {
    const date = new Date();
    const year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let day = date.getDay().toString();

    if (day.length === 1) {
      day = '0'+day;
    }
    if (month.length === 1) {
      month = '0'+month;
    }
    return year+month+day;
  }

  async getPoints(date: string): Promise<any[]> {
    return JSON.parse(await this.client.get(this.prefix+date));
  }

  async addPoint(point: any) {
    let points = JSON.parse(await this.client.get(this.prefix+this.getEntryString()));
    if (points) {
      points.push(point);
    } else {
      points = [point];
    }
    await this.client.set(this.prefix+this.getEntryString(), JSON.stringify(points));
  }

}
