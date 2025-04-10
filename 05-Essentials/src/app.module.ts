import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
      UsersModule,
      DatabaseModule,
      EmployeesModule,
      ThrottlerModule.forRoot([{ // ThrottlerModule is used to limit the number of requests
          name: 'short',
          ttl: 1000, // (time to live)
          limit: 3,
      },{  // means 3 requests per second
          name: 'long',
          ttl: 60000,
          limit: 20,
      }]),
      MyLoggerModule, // means 20 requests per minute
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard, // ThrottlerGuard is used to protect the application from DDoS attacks
  }],
})
export class AppModule {}
