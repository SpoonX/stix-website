---
title: About stix
original_id: about-stix
id: version-0.0.1-about-stix
---

Stix is a framework that helps you build well-structured APIs, applications and command line tools without making any assumptions.
It has been built to scale and also allow you to get started quickly.

It aims to be easy to use from the start and help you discover new features along the way to help out as you grow.

## Modules

Stix is a module-based, TypeScript-first Node.js® framework. You've probably seen this sentence in the readme, in the description of the repository and just about everywhere else.

But what does it _mean_?

> **Module is the term used for a bundle of isolated code within your project.**

Now, don't freak out! I know the term modules has been thrown around like salt on a snowy day, but it's really not that impressive.

A module has _(may have)_ its own routes, its own controllers, its own command line commands... You get the idea. Maybe.

### What makes a module?

Basically put, **a module is a regular directory with an entry file (exporting a class) that provides stix with the configuration needed to orchestrate the functionality provided**.

Here's an example directory structure of a module:

```
.
├── index.ts
├── config
│   ├── controller.ts
│   ├── index.ts
│   ├── router.ts
│   ├── command.ts
│   ├── service.ts
│   ├── cli.ts
└── src
    ├── Controller
    │   ├── ExampleController.ts
    ├── Command
    │   ├── ExampleCommand.ts
    ├── Service
    │   ├── ExampleService.ts
    └── Module.ts
```

And this is the interface for your module class:

```ts
interface ModuleInterface {
  onBootstrap?: (event?: Event<any>) => void | Promise<any>;
  getConfig?: (mode?: string) => { [key: string]: any } | Promise<{ [key: string]: any }>;
  getServerConfig?: () => { [key: string]: any } | Promise<{ [key: string]: any }>;
  getCliConfig?: () => { [key: string]: any } | Promise<{ [key: string]: any }>;
  init?: (moduleManager?: ModuleManager) => void;
}
```

Stix will bootstrap your module _(aka instantiate the class in the entry file)_ giving you a chance to register controllers, commands, perform your own logic or expose services that can be used by other modules.

Modules should behave based on configuration, allowing IoC. Any services should be registered with, and used from the Service manager _(which provides you with DI_.

More information on Modules can be found in the (shocker) Modules chapter.

- _**Note:** don't worry if some of these terms don't make sense to you yet, we'll touch on these subjects in more depth at a later time._
- _**Note:** Modules are optional as you'll see when following the **Basics** chapter, which covers the basics of stix without the use of modules._

## Server

The server mode of stix is a structure that at its core uses Koa. It allows you to register routes, controllers and middleware.
It's a way to use the powerful features stix offers without having to bend over backwards.

This allows modules like for example stix-gates to enrich requests, stix-wetland to compose query options and more.

By far the biggest upside to this is the access you get to services and the uniform response format. 

Want to learn more? Read more about the relevant topics such as controllers and routes. 

## Configuration

Stix has a class named Config that merges objects, arrays and maps.
There's one instance that holds the configuration for the entire application and is composed by requesting the config from modules, and merging the returned values in. The local configuration (passed in when instantiating Stix) is always merged in last, and thus always overrides the defaults. 

This allows you to load a module that has its own default configuration, and override (or extend) it.

This isn't very useful in your own application until you start either using third party modules or apply dynamic configurations based on environment (a local configuration overriding the default database adapter for example is not a strange thing to do).

## Service manager

Service managers are the most important part of stix. For example the ModuleManager itself is also a service.

Controllers are services, commands are services... Services are important. These services are managed by something called a ServiceManager, which allows you to set, get and update service instances.

### Why use a ServiceManager?

A ServiceManager enables DI (Dependency Injection) which allows you to register factories for your services or use one of the handy decorators.

One such example is the `@inject()` decorator. Do you require to have the config in your controller? Inject it:

```ts
import { AbstractActionController, Config } from 'stix';

export class ExampleController extends AbstractActionController {
  @inject(Config)
  private config: Config;

  /* actions go here... */
}
```

Now, when an action gets called you'll have access to the config.

- **Note:** this only works when your service was registered as an invokable.
- **Note:** Confused? That's okay. You can find more info and examples in the Services chapter.

## Modes

Stix has two running modes: 

- Server
- Cli

This separation enables stix to run most performant for each mode. Now, you can reuse logic for your CLI tools without having to maintain two code bases.

### Server

Server is the mode used to run the application and enable your API endpoints. You can use different configuration for each mode. Server starts up the http server, loads the controllers and registers the routes.

### CLI

CLI is the mode that is automatically set when using stix-cli. It allows you to easily write command line tools that you can run on your codebase. This is useful when you want to for example add administration tooling or debug dumps using the same code base. Commands are similar to controllers but are registered slightly different (options and arguments instead of routes) and have a different way of printing output (they're passed an instance of the console output class).

Confused? That's okay. You can read more about Commands and the CLI in the Commands chapter.

## What's next

There's much more that's possible, but it can be a bit much to take in at once. Most features are tucked away in modules, meaning you can add what you need and leave out the rest.

Read the documentation and go through the first steps to get more familiar with stix. It's fun to play around with (but I might be biased) so give it a spin.
