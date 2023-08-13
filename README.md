# NestJS Bull - Standalone Worker Sample

A sample repository showing how to run NestJS with Bull module, having a standalone worker process. This is useful when you need that the main process (which is scheduling the jobs based on API calls for example) is not interrupted by the queued jobs.

The advantage of this approach, as opposed to [Separate (sandboxed/forked) processors](https://docs.nestjs.com/techniques/queues#separate-processes) is that you have the Dependency Injection (and IoC) container available within your processors, thanks to this running as a [standalone application](https://docs.nestjs.com/standalone-applications).

The downside is that you it will not utilize multi-core CPUs, as the worker process is running in a single thread. This is simple to work around by running multiple instances of the worker process, either by scaling the worker horizontally (e.g. running multiple instances of the worker in a Kubernetes cluster) or by running multiple instances of the worker process in a single machine (e.g. using [PM2](https://pm2.keymetrics.io/)).

## Running the sample

```bash
# Install dependencies
yarn install

# Run the main process
yarn start:dev

# Run the worker process in a separate terminal
yarn start:worker
```

Now, make a GET request to http://localhost:3000/ and you should see the job being scheduled and processed by the worker process.

```bash
curl http://localhost:3000/
```
