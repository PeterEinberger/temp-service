import { Module } from '@nestjs/common';
import { ProbeEntry } from './ProbeEntry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProbeController } from './probe.controller';
import { ProbeService } from './probe.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProbeEntry])],
  providers: [ProbeService],
  controllers: [ProbeController],
})
export class ProbeModule {}
