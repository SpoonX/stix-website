---
title: stix-gates
sidebar_label: Usage
id: version-4.2.3-gates-usage
original_id: gates-usage
---

## Usage

Using gates is, in the spirit of stix as magic-less as possible. This means that you maintain a clear overview of what's going on, and you can **cmd+click/ctrl+click** _(I don't judge... Publicly.)_ your way through your codebase as happy as the day you were born.

### Gates configuration

Let's take a look at the `src/config/gates.ts` file.

```ts
import { Gate } from 'stix-gates';
import { SomeController } from '../api/controllers';
import { IsAuthenticated, IsNotGuest } from '../api/gates';

const compose = Gate.compose;

export const gate = {
  locations: [ path.resolve(__dirname, '..', 'src', 'Gate') ], // Tell stix-gates where it can find your Gate classes
  gates: {}, // Optional service-manager config
  rules: new Map([
    // By default, allow no access to anything.
    // This is also the stix-gates default when no gates were found.
    ['*', false],

    // Allow access to all actions, except one.
    // Produces: { OpenController: { '*': true, secretAction: false } }
    [ OpenController, { '*': true, secretAction: false } ],

    // Compose some rules for the UserController using the helper.
    // Produces: { UserController: { profile: [ isAuthenticated, isNotGuest ] } }
    compose(UserController, { profile: [ isNotGuest ] }, [ isAuthenticated ]),
  ]),
};
```

As you can see, you can use the reference to your controller, and similarly to your gates. You can also just use arrays.

### Gate implementation

Now that you know how to configure gates, you'll need to start writing them.

You can put your gates anywhere you like. They can even be imported from other modules, how convenient is that? Here are a couple of examples to help you understand how gates work.

**Simple result**

```ts
import { ContextInterface } from 'stix';

export class IsAuthenticated extends AbstractGate {
  public async passThrough (ctx: ContextInterface) {
    return !!ctx.state.user;
  }
}
```

- Gates can be async functions.
- `ctx` is the [koa context](https://koajs.com/#context). It holds the request, response, body etc.
- When a gate returns `false`, stix-gates will create a `ClientErrorResponse.forbidden()` response for you.
- When it returns `true`, the next gate will be applied. If this was the last gate, the action will be dispatched.

**Default value**

```ts
import { ContextInterface } from 'stix';

export class IsAuthenticated extends AbstractGate {
  public passThrough (ctx: ContextInterface) {
    if (!ctx.state.user) {
      return false;
    }
  }
}
```

- Gates are not required to return a value.
- When nothing was returned (or `undefined`) the gate passes automatically (defaulting to `true`).
- This allows you to use gates to patch the `ctx` with additional data. One example is using a gate to fetch a user from the database based on the user_id provided in the JWT.

**Custom response**

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

- Returning `false` from a gate defaults to a `ClientErrorResponse.forbidden()` denying the request.
- Returning **any other `Response` type will _also_ result in the request being terminated** with your custom response.
- This allows you to decide what type of response gets sent back early if needed.
- Common responses are available on your gate when extending AbstractGate.

<details>
<summary><em><strong>More available response methods</strong></em></summary>
<p>

The AbstractGate extends the AbstractResponseHelper, giving you the following helper methods:

- okResponse
- createdResponse
- notFoundResponse
- requestTimeoutResponse
- forbiddenResponse
- badRequestResponse
- unauthorizedResponse
- internalServerErrorResponse
- permanentRedirectResponse

You can read more about responses in the  [API documentation](../api/classes/abstractresponsehelper).

</p>
</details>
