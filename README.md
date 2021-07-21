# README

a simple and naife example to pass a UserService to a DynamicModule (NestJs Library)

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
