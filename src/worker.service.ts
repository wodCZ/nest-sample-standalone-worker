import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WorkerService {
  async work() {
    // Return a promise that never resolves, so that the worker never stops
    return new Promise((resolve, reject) => {
      Logger.log('Waiting for jobs...', WorkerService.name);
    });
  }
}
