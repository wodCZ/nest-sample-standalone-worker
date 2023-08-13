import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { HelloQueue } from './constants';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        // run docker compose up -d to start redis
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({ name: HelloQueue }),
  ],
  exports: [BullModule],
})
export class QueuesModule {}
