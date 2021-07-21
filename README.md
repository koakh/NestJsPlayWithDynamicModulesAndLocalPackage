# README

a simple and naife example to pass a UserService to a DynamicModule (NestJs Library)

## Some Curls

```shell
$ curl 127.0.0.1:3000
# OK
$ curl -X POST 127.0.0.1:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "username": "john", "password": "changeme" }' \
  jq
{
  "logged": true
}  
# KO
$ curl -X POST 127.0.0.1:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{ "username": "john", "password": "whatpass" }' \
  jq
{
  "logged": false
}  
```
