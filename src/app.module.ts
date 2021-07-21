import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

// /* IAnimal.ts */
// export abstract class IAnimal {
//   abstract speak(): string;
// }

// /* animal.service.ts */
// // You can implement an abstract class without extending it!
// export class Dog implements IAnimal {
//   speak() {
//     return "Woof";
//   }
// }

@Module({
  imports: [
    UsersModule,
    // ConfigModule.register({
    //   folder: './config'
    // })
    ConfigModule.register({
      userService: new UsersService(),
      // inject: [UsersService],
//       folder: './config',
//       hello: () => 'word',
//       findOne: new UsersService().findOne,
      // https://docs.nestjs.com/fundamentals/async-providers#asynchronous-providers
      // useFactory: async (service: AppService, usersService: UsersService) => {
      //   return {
      //     findOne: usersService.findOne,
      //     // folder: './config',
      //     getHello: service.getHello,
      //   }
      // }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
