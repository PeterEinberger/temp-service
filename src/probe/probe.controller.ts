import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ProbeService } from './probe.service';


@Controller('probe')
export class ProbeController {

  constructor(private probeService: ProbeService) {

  }

  @Get()
  async getLastProbePoints(): Promise<any> {
    const points = await this.probeService.getPoints(this.probeService.getEntryString());
    if (points) {
      return points[points.length-1];
    } else {
      return
    }
  }

  @Get('/today')
  async getAllLastProbePoints(): Promise<any> {
    const point = await this.probeService.getPoints(this.probeService.getEntryString());
    if (point) {
      return point;
    } else {
      return
    }
  }

  @Post()
  async addProbePoint(@Body() entry: any): Promise<void> {
    Logger.log(JSON.stringify(entry), 'new entry');

    const probeEntry = {
      humidity : parseFloat(parseFloat(entry.humidity).toFixed(1)),
      temp : parseFloat(parseFloat(entry.temp).toFixed(1)),
      date : new Date().toTimeString(),
      senderId : entry.senderId,
    };

    await this.probeService.addPoint(probeEntry);

  }
}
