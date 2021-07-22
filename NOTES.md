# NOTES

- [NestJS Dependency Injection with Abstract Classes](https://dev.to/ef/nestjs-dependency-injection-with-abstract-classes-4g65)

- [Allow useClass with dynamic provider injection · Issue #4476 · nestjs/nest](https://github.com/nestjs/nest/issues/4476)

abstract class I {
  abstract i(): number;
}

class C implements I {
  i(): number {
    throw new Error("Method not implemented.");
  }
}

As you can see, C implements I (which is not an interface, but an abstract class which acts as an interface - which is completely valid and works equivalently). Since classes exist at runtime (JS functions), you can use them as injection tokens. Furthermore, in this case, you don't even have to use @Inject() anymore.

- [Inject provider in a dynamic module · Issue #2199 · nestjs/nest](https://github.com/nestjs/nest/issues/2199)
- [NestJS Dependency Injection - Decoupling Services With Interfaces](https://jasonwhite.xyz/posts/2020/10/20/nestjs-dependency-injection-decoupling-services-with-interfaces/)

@Bilchuck is right. I'd suggest looking at TypeOrmModule (https://github.com/nestjs/typeorm/blob/master/lib/typeorm.module.ts) - see forRootAsync() method implementation.

## Thanks PerfectOrphan31 :)

koakh — Hoje às 00:09
I stayed to send the small poc repo to try to 
figure out a way to inject UserService in AuthModule 
(local and decoupled librrary) 

I have some delay to clean up the code, create a kiss repo with a local package decouped and I already figure out a way to instantiate manually the service and pass it to dynamic module, but seems a hack way and not very elegant or ideomatic (nestjs way)
in the end it will not live in IoC, is just a hack and a reference :frowning:

can you check out the repo here 
https://github.com/koakh/NestJsPlayWithDynamicModulesAndLocalPackage
and tell me if there is a better elegant way to use the  UserModule in AuthModule, or just inject the UserService into AuthModule IoC (to use inject in controller for ex) it will work for my purpose
in the end is a naife and newbie try out, but it works, better than nothing, but there seems better ways to do.....maybe you can guide me to the right direction :slight_smile:
PerfectOrphan31 — Hoje às 00:17
This is actually pretty close to what I had in mind earlier. I'd end up going with a registerAsync method instead of just register so that I could use imports to get the UserService without needing instantiate it myself. Then I'd probably separate out the AUTH_CONFIG to separate injectable tokens via a factory that injects the AUTH_CONFIG so that I could provide the USER_SERVICE directly, and separately from the AUTH_CONFIG, but that's just my approach option. 

Overall, it looks like a good attempt at separation
koakh — Hoje às 00:19
but we can improve it? 

I'd end up going with a registerAsync method instead of just register so that I could use imports to get the UserService without needing instantiate it myself. 

this is what I really want to do
but how can I do that?
sorry for dumb question
PerfectOrphan31 — Hoje às 00:20
https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370

Really good info in here how you can do it. There's also this package which I use for almost all of my dynamic modules now: https://github.com/golevelup/nestjs/tree/master/packages/modules
koakh — Hoje às 00:21
with registerAsync we can use imports like here
is the awesome post that I started to read 1h ago from John
let me check it man, thanks, you are great
i don't want to waste more of your precious time 
I will read it, now that Im close to have it done the right way, thanks to you man
I love posts of John Biundo man, I learn a lots from him, like creating nestjs packages :slight_smile: