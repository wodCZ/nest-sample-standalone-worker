import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { HelloJob, HelloQueue } from './constants';

/**
 * Processor for hello queue. Make sure this is only registered in WorkerModule `providers` array.
 * If this gets registered within AppModule's dependency tree, the app will also process jobs.
 */
@Processor(HelloQueue)
export class HelloProcessor {
  constructor() {
    Logger.log('Processor registered', HelloProcessor.name);
  }

  @Process(HelloJob)
  async hello(job: Job) {
    Logger.log(job.data, HelloProcessor.name);
  }
}
