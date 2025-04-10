import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

/**
 * -------------------------------------------------------------------
 * @author: Gayanuka Bulegoda
 * @github: https://github.com/gayanukabulegoda
 * @portfolio: https://grbulegoda.me
 * -------------------------------------------------------------------
 * @project: Nestjs Intro
 * @since: 09-04-2025 06:54 PM
 * @available_on: https://github.com/GRB-Workspace/Nestjs-Intro.git
 * -------------------------------------------------------------------
 */

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { // Also possible, but not recommended to use this
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(MyLoggerService));
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.enableCors();
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
