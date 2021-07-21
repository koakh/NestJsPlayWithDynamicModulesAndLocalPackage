import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    ConfigModule.register({
      userService: new UsersService(),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
