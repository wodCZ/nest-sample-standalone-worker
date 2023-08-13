import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { HelloJob, HelloQueue } from './constants';

@Injectable()
export class AppService {
  constructor(@InjectQueue(HelloQueue) private readonly helloQueue: Queue) {}

  runHello(): string {
    this.helloQueue.add(HelloJob, { name: 'world' });
    return 'queued';
  }
}
