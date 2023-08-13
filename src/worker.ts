import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker.module';
import { WorkerService } from './worker.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(WorkerModule);

  const worker = app.get(WorkerService);
  await worker.work();
}
bootstrap();
