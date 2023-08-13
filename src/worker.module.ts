import { Module } from '@nestjs/common';
import { QueuesModule } from './queues.module';
import { WorkerService } from './worker.service';
import { HelloProcessor } from './hello.processor';

@Module({
  imports: [QueuesModule],
  providers: [WorkerService, HelloProcessor],
  exports: [WorkerService],
})
export class WorkerModule {}
