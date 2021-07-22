import { AuthModule } from '@koakh/nestjs-package-starter';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    // with registerRoot
    AuthModule.register({
      // naife way to pass userService
      userService: new UsersService(),
      // config
      config: {
        folder: '../consumerapp/config'
      }
    })
    // TODO not working
    // with registerAsync
    // AuthModule.registerAsync({
    //   inject: [UsersService],
    //   //Note that there's also an inject property, which is used to inject the ConfigService into the factory function
    //   useFactory: async (usersService: UsersService) => {
    //     return {
    //       findOne: (username: string) => usersService.findOne(username),
    //       login: (username: string, password: string) => usersService.login(username, password),
    //     }
    //   },
    //   imports: [UsersService],
    //   // config
    //   config: {
    //     folder: '../consumerapp/config'
    //   },
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
