import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueuesModule } from './queues.module';

@Module({
  imports: [QueuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
