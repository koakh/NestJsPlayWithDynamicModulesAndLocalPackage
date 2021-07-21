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