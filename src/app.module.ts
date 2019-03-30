import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbeEntry } from './probe/ProbeEntry.entity';
import { ProbeModule } from './probe/probe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'deimudda',
      database: 'temp-service',
      authSource: 'admin',
      useNewUrlParser: true,
      entities: [ProbeEntry],
      synchronize: true,
    }),
    ProbeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
