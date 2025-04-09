import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * -------------------------------------------------------------------
 * @author: Gayanuka Bulegoda
 * @github: https://github.com/gayanukabulegoda
 * @portfolio: https://grbulegoda.me
 * -------------------------------------------------------------------
 * @project: Nestjs Intro
 * @since: 08-04-2025 11:18 AM
 * @available_on: https://github.com/GRB-Workspace/Nestjs-Intro.git
 * -------------------------------------------------------------------
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
