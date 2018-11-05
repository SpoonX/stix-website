---
title: Modules
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

The rest of this document will be based on the work we did in [learn the basics](learn-the-basics.md).
If you did not follow that first, do that now and return here afterwards.

1. Create a new directory `module` with `MyModule` in it at `app/module/MyModule` (`mkdir -p app/module/MyModule`)
2. Move `app/src` to your new module (`mv app/src app/module/MyModule`)
3. Create a new config file `app/config/modules.ts` with the following contents:

    ```ts
    import MyModule from '../module/MyModule';

    export const modules = [
      MyModule,
    ];
    ```

4. And add the export to `app/config/index.ts`

    ```ts
    export * from './modules';
    ```

5. Move your `controller.ts` and `routes.ts` to your new module (`mkdir app/module/MyModule/config && mv app/config/{router,controller}.ts $_`)
6. Create a new file at `app/module/MyModule/config/index.ts`
7. Open up `app/config/index.ts` and move the exports for `./controller` and `./routes` to `app/module/MyModule/config/index.ts`
8. Create your main Module file at `app/module/MyModule/src/MyModule.ts` with the following contents:

    ```ts
    import * as config from '../config';
    import { ModuleInterface } from 'stix';

    export class MyModule implements ModuleInterface {
      getConfig() {
        return config;
      }
    }
    ```

9. Create a new file at `app/module/MyModule/index.ts` and export your module by default.

    ```ts
    import { MyModule } from './src/MyModule';

    export default MyModule;
    ```

If you followed the steps properly you can now run `yarn dev` and visit [http://localhost:1991/](http://localhost:1991/) once more and see the same response:

```json
{"Hello":"world!"}
```

Party hard!

## Conclusion

As you can see, a module isn't that impressive but offers a lot of flexibility. Creating a module is easy.
All we did was do what stix-cli already does for us. But at least now you know what's being generated and what it means.

Now, assuming you have stix-generator added to your project _(which happens automatically when using `stix init`)_ you can safely let stix-generator take care of this for you:

`stix generate:module my-module`

Speaking of generators, the next section will cover them in more detail.
