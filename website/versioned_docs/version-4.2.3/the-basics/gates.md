---
title: Gates
id: version-4.2.3-gates
original_id: gates
---

Another core module available (and installed by default after `stix init` is stix-gates. This document will explain when it's useful to use, so you can decide if you want to learn more. If you do, you can check out the [stix-gates section in the modules section of the documentation](../modules/stix-gates/gates-about).

## What are gates

Gates are like middleware, but different. They allow you to grant or reject passage. They also allow you to enhance the passing request with more information. They sit between your router and your action, securing your endpoints. Here's a simplified overview of the flow:

```
Request--->Router+--->Gates+------>Dispatcher+
                 |         |                 |
                 v         v                 v
                404       4xx               2xx
                 |         |                 |
                 +---------+-----------------+-->Response
```

Let's look at two examples where gates would be useful.

### Setting the user

This is something I've seen happen in a great many applications. You have an action that requires a user to be authenticated and you want to have the user's entity so you can work with it.

Let's create 2 gates: 1 to verify the user is authenticated, and another to set the user on the context.

#### Verify authentication

For our first example let's play gate keeper. Let's assume we've already parsed our token, and found the user's metadata.

```ts
import { ContextInterface } from 'stix';
import { AbstractGate } from 'stix-gates';

export class IsAuthenticated extends AbstractGate {
  public passThrough (ctx: ContextInterface) {
    if (!ctx.state.user) {
      return this.unauthorizedResponse();
    }
  }
}
```

It's that easy. The user is not allowed in so we send back an unauthorizedResponse.

**Note:** AbstractGate just like the AbstractActionController extend the [AbstractResponseHelper](../api/classes/abstractresponsehelper) providing access to convenience response methods.

#### Set the user

For our second example, let's fetch the user and set it on the context.

```ts
import { ContextInterface } from 'stix';
import { AbstractGate } from 'stix-gates';
import { EntityRepository } from 'wetland';
import { injectRepository, IdParamType } from 'stix-wetland';
import { User } from '../Entity';

export class SetUser extends AbstractGate {
  @injectRepository(User)
  private userRepository: EntityRepository<User>;

  public passThrough ({ state: { params: { id } } }: IdParamType) {
    ctx.state.user = await this.userRepository.findOne(id);

    if (!ctx.state.user) {
      return this.notFoundResponse();
    }
  }
}
```

Here we set the user entity instance, and if we can't we return a 404.

### Validating input

Another great example of where gates would be useful is validation. You can catch validation errors and normalize them before ever hitting your action. Let's look at a small example.

```ts
import { ContextInterface } from 'stix';
import { AbstractGate } from 'stix-gates';

export class IsAuthenticated extends AbstractGate {
  public passThrough (ctx: ContextInterface) {
    if (ctx.body.name.length < 3) {
      return this.badRequestResponse('Name needs to be at least three characters');
    }
  }
}
```
