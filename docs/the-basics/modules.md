---
title: Modules
id: modules
---

Modules allow you to group you application's logic to maintain structure and encourage reusability. 
Think of modules as bundled building blocks with unique traits to help make sense of potentially gigantic codebases.

Here's an example directory structure of a module to help you picture what we're talking about moving forward:

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

## What makes a module

We'll soon get our hands dirty, but first some theory. YES REALLY! Stop complaining and pay attention. Sorry I yelled at you, but you need to know this first and tough love is pure. ♥️

At the bare minimum, in the eyes of stix's ModuleManager a module is any class with the following interface:

```ts
export interface ModuleInterface {
  getConfig?: (mode?: string) => { [key: string]: any } | Promise<{ [key: string]: any }>;
  getServerConfig?: () => { [key: string]: any } | Promise<{ [key: string]: any }>;
  getCliConfig?: () => { [key: string]: any } | Promise<{ [key: string]: any }>;
  init?: (moduleManager?: ModuleManager) => void;
  onBootstrap?: (event?: Event<any>) => void | Promise<any>;
}
```

Notice how all the methods are optional? That's because the ModuleManager doesn't care what you do as long as you do it through the provided channels. What's nice about this is that you can compose each module to fit its role.

Let's walk through the methods to figure out what they're for, to help you understand how to use them. We'll do so in order of execution.

### Constructor

It's easy to forget about, but the constructor is of course available to do work constructing your module. You won't have access to anything from the framework here yet and are passed zero arguments. It's very unlikely you'll ever use the constructor of your module.

### getConfig

Configuration is how you enable features for your module. Stix requests your module to return configuration so it can merge whatever is returned into the configuration at that point.

We'll talk about stix's Config class in more detail at a later time.

A relevant detail about the getConfig method is that it's allowed to be async. This means that, if needed, you can fetch configuration from a server, load a file... Or query a database. As long as you return an object the ModuleManager is happy.

### getServerConfig

This method is identical to getConfig, except that it'll only be called when the server was started in the Server mode. This allows you to for example only load controllers when it's useful which is good for perfomance.

### getCliConfig

This method is identical to getConfig, except that it'll only be called when the server was started in the Cli mode. Likewise it's good for performance to only load Commands when running in cli mode as these methods are very unlikely to be needed in Server mode.

### init

The `.init()` method is the first actionable method _(after of course the constructor)_ that the ModuleManager will call when loading your module. This method allows you to set up listeners, initialize packages and attach custom middleware for the server. You'll likely only use this when you want to perform some logic when the application emits the Ready event and you wish to perform some logic at this stage.

### onBootstrap

The onBootstrap method is a convenience method that removes the need to do this:

```ts
import { ModuleManagerEvents, Config } from 'stix';

class MyModule {
  init(moduleManager) {
    const eventManager = moduleManager.getEventManager();
    
    eventManager.attachOnce(ModuleManagerEvents.OnBootstrap, (config: Config) => {
      // Same as onBootstrap.
    });
  }
}
```

onBootstrap is called when the ModuleManager is done collecting configs from all modules, making it safe to do whatever you want to do at this stage, with access to the complete config.

This method would be used basically the same as init(), except you'd use it when you need the config.

## Making a module

I'm sorry for that. But now that you understand the module file, you can get started making something yourself.

[TBD: Move this part to the tutorial.]
