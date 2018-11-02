---
title: stix-gates
sidebar_label: Helpers
id: version-0.0.1-gates-helpers
original_id: gates-helpers
---

## Helpers

stix-gates comes with a couple of helpers to make working with it even more fun.

### Gate.compose(controller, rules, baseRules?)

This is a simple utility that helps you compose your gates. Using this allows you to keep the reference to the controllers and gates you use, making it easier to navigate through your IDE. On top of that, it allows you to define some baseRules, and it'll merge those in for every action.

Code speaks. This example uses the `baseRules`:

```ts
compose(UserController, { profile: [ isNotGuest ] }, [ isAuthenticated ]);

// Produces:
{
  UserController: {
    profile: [ isAuthenticated, isNotGuest ],
  },
}
```

And here's a simple example using booleans:

```ts
// Allow access to all actions, except one.
compose(OpenController, { '*': true, secretAction: false });

// Produces:
{
  OpenController: {
    '*': true,
    secretAction: false,
  }
}
```

This is especially useful if your rules repeat often.
