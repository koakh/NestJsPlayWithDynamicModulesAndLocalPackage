# README

> project as a problem with `Error: Cannot find module 'reflect-metadata'` when launch consumer app....

a simple and naife example to pass a UserService to a DynamicModule (NestJs Library)........won't work this is one of the tries without sucess until find how to do it the "right way"

in th end the only thing that matters in this poc is the `userService: new UsersService()` and try to figure out a way to inject the userService, seems more idiomatic than create a instance of it in.....

```typescript
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
```

## Install dependecies

```shell
Error: Cannot find module 'reflect-metadata'
It's a peerDependency.
You need to install it alongside rxjs aswell.
npm install --save reflect-metadata rxjs
```

## Build local unpublished package

```shell
$ cd nestjs-package-starter
$ npm i
$ npm run start:dev
```

## Install Package in consumer app

> to use local package nestjs-package-starter

```shell
$ cd consumerapp
$ npm i
# not need here only as a reference to how to import it into consumer app
$ npm i ../nestjs-package-starter

```

## Start consumer app

```shell
$ cd nestjs-package-starter
$ npm run start:debug
```

## Some Curls to test

```shell
$ curl 127.0.0.1:3000
{
  "message": "hello john"
}
$ curl 127.0.0.1:3000/config
{
  "HELLO_MESSAGE": "hello Hello there, world!"
}
# OK
$ curl -X POST 127.0.0.1:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "username": "john", "password": "changeme" }' \
  | jq
{
  "logged": true
}  
# KO
$ curl -X POST 127.0.0.1:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "username": "john", "password": "whatpass" }' \
  | jq
{
  "logged": false
}
```
