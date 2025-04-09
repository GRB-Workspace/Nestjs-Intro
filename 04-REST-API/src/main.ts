import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * -------------------------------------------------------------------
 * @author: Gayanuka Bulegoda
 * @github: https://github.com/gayanukabulegoda
 * @portfolio: https://grbulegoda.me
 * -------------------------------------------------------------------
 * @project: Nestjs Intro
 * @since: 09-04-2025 01:40 PM
 * @available_on: https://github.com/GRB-Workspace/Nestjs-Intro.git
 * -------------------------------------------------------------------
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
