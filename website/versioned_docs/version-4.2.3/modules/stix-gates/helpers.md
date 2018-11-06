---
title: stix-gates
sidebar_label: Helpers
id: version-4.2.3-gates-helpers
original_id: gates-helpers
---

## Helpers

stix-gates comes with a couple of helpers to make working with it even more fun.

### Gate.compose(controller, rules, baseRules?)

Because gates are indexed using Maps, and not everyone is comfortable with an array of arrays, we added the `Gate.compose()` helper method. The added advantage is that it allows you to define some baseRules, and it'll merge those in for every action defined.

Code speaks. This example uses the `baseRules`:

```ts
compose(UserController, { profile: [ isNotGuest ] }, [ isAuthenticated ]);

// Produces:
[
  UserController,
  {
    profile: [ isAuthenticated, isNotGuest ],
  },
]
```

And here's a simple example using booleans:

```ts
// Allow access to all actions, except one.
compose(OpenController, { '*': true, secretAction: false });

// Produces:
[
  OpenController,
  {
    '*': true,
    secretAction: false,
  }
]
```

This is especially useful if your rules repeat often.
