---
title: Controllers and actions
id: version-4.2.2-controllers-and-actions
original_id: controllers-and-actions
---

Controllers are classes of which (most) methods are actions. Actions are what handles an HTTP request. A controller is also a service, providing you with all the benefits that come with it.

Let's take control and jump into action.

Hehe.

## Services?

Yep. Controllers are services. Services are loaded through a service manager (yes, there are multiple, don't worry about it). This means you can register them as such and have factories, invokables, aliases... All of that good stuff.

I won't go into detail here as this is covered in the Services topic but I will give you an example to inspire you, like your very own little muse.

```ts
import { AbstractActionController, Config, inject } from 'stix';
import { WetlandService } from 'stix-wetland';

class SomeController extends AbstractActionController {
  @inject(WetlandService)
  private wetlandService: WetlandService;

  @inject(Config)
  private config: Config;
  
  public async findBooks() {
    // You now have access to the wetlandService and config.
  }
}
```

Cool huh?

## Actions

Actions can be async methods and are required to return a response. The former speaks for itself, the latter might be confusing but is explained in the Response chapter.

Actions get one argument being the context, which is the [koa context](https://koajs.com/#context).

## AbstractActionController

Let me start of by saying that extending this class is optional for controllers, but recommended.

It does 2 things:

1. Inject the response service
2. Expose a couple of convenience methods for easy responses

The methods exposed are:

- okResponse
- createdResponse
- notFoundResponse
- requestTimeoutResponse
- forbiddenResponse
- badRequestResponse
- unauthorizedResponse
- internalServerErrorResponse
- permanentRedirectResponse

You can find the methods and their arguments [in the api docs](../api/classes/abstractactioncontroller).

These methods simply make it easier to return a response.
