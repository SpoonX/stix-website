---
title: DbRoute
id: version-4.2.2-wetland-db-route
original_id: wetland-db-route
---

# DbRoute

Stix-wetland comes with a helper class to define your routes. This allows for faster development and a more formalized structure.

## DbRoute.find()

This method creates a route that points to an action called `find`.

This is a synonym for: `Route.get('/user', UserController, 'find')`

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.find('/user', UserController),
  ],
};
```

## DbRoute.findOne()

This method creates a route that points to an action called `findOne`.

This is a synonym for: `Route.get('/user/:id', UserController, 'findOne')`

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.findOne('/user', UserController),
  ],
};
```

## DbRoute.create()

This method creates a route that points to an action called `create`.

This is a synonym for: `Route.post('/user', UserController, 'create')`

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.create('/user', UserController),
  ],
};
```

## DbRoute.modify()

This method creates a route that points to an action called `modify`.

This is a synonym for: `Route.patch('/user/:id', UserController, 'modify')`

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.modify('/user', UserController),
  ],
};
```

## DbRoute.destroy()

This method creates a route that points to an action called `destroy`.

This is a synonym for: `Route.delete('/user/:id', UserController, 'destroy')`

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.destroy('/user', UserController),
  ],
};
```

## DbRoute.all()

This method applies all of the routes mentioned above in one go, providing crud functionality mounted to an endpoint.

This is a synonym for:

```ts
[
  Route.get('/user/:id', UserController, 'findOne')
  Route.get('/user', UserController, 'find'),
  Route.post('/user', UserController, 'create')
  Route.patch('/user/:id', UserController, 'modify'),
  Route.delete('/user/:id', UserController, 'destroy'),
]
```

### Example

**config/router.ts:**

```ts
import { UserController }  from '../src/Controller';
import { DbRoute } from 'stix-wetland';

export const router = {
  routes: [
    DbRoute.all('/user', UserController),
  ],
};
```
