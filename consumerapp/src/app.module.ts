import { AuthModule } from '@koakh/nestjs-package-starter';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    AuthModule.register({
      // naife way to pass userService
      userService: new UsersService(),
      // config
      config: {
        folder: '../consumerapp/config'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
