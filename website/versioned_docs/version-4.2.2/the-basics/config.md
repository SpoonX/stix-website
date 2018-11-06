---
title: Config
id: version-4.2.2-config
original_id: config
---

Configuration plays a very important role in stix. Let's take a look at how it behaves and how it's being used.

## Config class

When creating a new instance of stix, you instantiate the Application class like so:

```ts
import * as config from './config';
import { Application } from 'stix';

const app: Application = await new Application(config);
```

The first thing your stix Application does, is create a new Config instance.

```ts
import { Config } from 'stix';

const config = new Config(yourConfig);
```

To understand what this means and what happens in stix, we'll be looking at the use of the Config class.

### Merging

The main feature of the Config class is merging configurations. This works for arrays, objects and maps. Code speaks, so let's look at an example.

```ts
import { Config } from 'stix';

const data = {
  items: {
    bookshelf: {
      books: [
        { title: 'It Devours!', author: 'Joseph Fink' },
        { title: 'Mostly Void, Partially Stars', author: 'Joseph Fink' },
      ],
    },
  },
};

const config = new Config(data);

config.merge({
  hobbies: ['reading'],
  items: {
    bookshelf: {
      books: [
        { title: 'The Great Glowing Coils of the Universe', author: 'Joseph Fink' },
        { title: 'Welcome to Night Vale', author: 'Joseph Fink' },
      ],
    },
  },
});

console.log(config.of('items'));

// Produces:
{ 
  bookshelf: { 
    books: [
      { title: 'It Devours!', author: 'Joseph Fink' },
      { title: 'Mostly Void, Partially Stars', author: 'Joseph Fink' },
      { title: 'The Great Glowing Coils of the Universe', author: 'Joseph Fink' },
      { title: 'Welcome to Night Vale', author: 'Joseph Fink' },
    ],
  },
}
```

As you can see, it's pretty straight forward. Now that you know how merge works, it'll help you understand how the rest works.

### Of

The config class also has a method called `.of(key)`. All it does is return the data at `key`. This is useful in TypeScript because it allows you to type your config objects.

### Config in stix

Your application and modules alike all provide configuration. Generally this would be a `router`, `controller` or `services` key. Every module can claim a key in the config object.

The order in which your modules are loaded dictates the order in which the configs get merged. This is a powerful concept, as it allows IoC (Inversion of Control).

Let's say you have a third party `User` module that exposes a `user` config key. Now let's assume that it allows you to configure the number of cycles used by bcrypt to encrypt a password.

Now we can add a config key for that:

```ts
export const user = {
  bcryptCycles: 12,
};
```

### Maps

Maps also get merged. This is a feature that ServiceManagers heavily rely on.

This is cool when you want to override a specific service. As you might already or soon will know, services use the referrence to the _originally intended service_ as the key. To override that service with your own, you just need to use that referrence as a key and set your override as the value. Let's take the `User` module as an example and override the UserController and AuthService.

**app/some-module/config/services.ts:**

```ts
import { FactoryInterface } from 'stix';
import { AuthService } from 'some-user-module';
import { MyCustomAuthServiceFactory } from '../src/Service/AuthService';

export const services = {
  factories: new Map<Function,FactoryInterface>([
    [ AuthService, MyCustomAuthServiceFactory ],
  ]),
};
```

**app/some-module/config/controller.ts:**

```ts
import { UserController } from 'some-user-module';
import { MyCustomUserController } from '../src/Controller/UserController';

export const controller = {
  controllers: {
    invokables: new Map<Function, Function>([
      [ UserController, MyCustomUserController ],
    ]),
  },
};
```

_**Note:** I used invokables and factories as service types here. You'll learn more about those in the services guide._
