---
title: Database
---

Almost everyone uses a database when building an API. So what's the point of using an API framework if talking to a database isn't possible without manual labour?

Well, before there was stix, there was [wetland](https://wetland.spoonx.org/). Wetland is an ORM written in TypeScript based on the JPA spec. It has a really nice development experience in that it allows you to just _run_ by offering development migrations.

_But then how do I apply migrations in production?_ you might ask. Well, wetland has you covered there as well. It has a migration system in place that even helps you generate the code for migrations.

This document will contain a couple of examples but will only have the gist of it when it comes to stix. It has its own documentation so I'll be referring to that.

_**Note:** Wetland is the default and offers a lot of features and convenience methods. Stix-wetland is tailored to fit your typical stix development flow, but you might have a different library you want to use. That's completely fine. Stix runs in your code, so you decide. Don't want to use it? It's as easy as not using stix-wetland._

## Getting started

I recommend getting started by following the [wetland tutorial](https://wetland.spoonx.org/Tutorial/setting-up.html). It covers everything from setting up, to running queries. It touches on relations, migrations, snapshots, Unit of work... Well, everything.

Once you're done there, you can take a look at the [setup of stix-wetland](https://stix.netlify.com/docs/modules/stix-wetland/wetland-setup) to get an idea of how that works.

The module docs there touch on the stix-specific decorators and route helpers. Especially the decorators are useful, and we'll be looking at those further down. But first, a word from a sponsor.

## Wetland config

Just kidding, there is no sponsor.

Wetland needs to know where/what your entities are. It can't just magically guess your datamodel, so it needs your help.

Wetland reserves the, wait for it, `wetland` key in the config. When using the recommended structure, you'll generally have multiple files: one at your application level `app/config/wetland.ts` and one at each of the modules that intend to use wetland `app/module/YourModule/config/wetland.ts`.

### App-level

The config at your **app-level** contains app-wide configurations. These could be mapping configs, stores (configs for databases) etc. Example:

```ts
export const wetland = {
  mapping   : { defaultNamesToUnderscore: true, defaults: { cascades: [ 'persist' ] } },
  stores    : {
    defaultStore: {
      client    : 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'your-database',
      },
    },
  },
};
```

### Module-level

On a module level you're likely to want to register the entities for that module. Wetland allows you to also provide a directory instead, making it less maintenance. Here's an example _(and generally it'll be exactly this)_ module config:

```ts
import * as path from 'path';

export const wetland = {
  entityPaths: [ path.resolve(__dirname, '..', 'src', 'Entity') ],
};
```

**Note:** When using modules be sure to use the plural `entityPaths`! As you can read in the [Config](./config) chapter, arrays get merged. When there's a conflict the last place to supply the `entityPath` key wins, meaning the other entities will never be laoded.

You can read more about configuration in [the wetland docs](https://wetland.spoonx.org/configuration.html).

## Decorators

For most common operations (CRUD) you don't want to have to write boilerplate code. That makes perfect sense. 

Stix's service manager allows you to create injectable methods. This is a pretty powerful but foreign concept that helps you write reusable methods. Think of these as [traits](https://en.wikipedia.org/wiki/Trait_(computer_programming)). Now built on top of those traits, stix-wetland offers a couple of convenience methods that implement these basic features.

We'll be looking at two of them, to hopefully give you an idea of how powerful they are. For more information you can take a look at the [documentation for stix-wetland](../modules/stix-wetland/wetland-decorators).

### find

The `@find()` decorator [(can be found here)](../modules/stix-wetland/wetland-decorators#findactionentity) implements a method that performs a find on the Entity registered.

Here's an example:

```ts
import { AbstractActionController } from 'stix';
import { findAction } from 'stix-wetland';
import { User } from '../Entity/User';

@findAction(User)
export class UserController extends AbstractActionController {
}
```

It allows a lot of flexibility in the url to shape your queries. Having to implement this for every endpoint would be boilerplate nobody wants, and thus warranted a decorator.

### dbActions

The `@dbActions()` decorator applies all of the action decorators available to your controller, giving you a full crud controller.

```ts
import { AbstractActionController } from 'stix';
import { dbActions } from 'stix-wetland';
import { User } from '../Entity/User';

@dbActions(User)
export class UserController extends AbstractActionController {
}
```

Combined with the `DbRoute.all()` helper ([docs here](../modules/stix-wetland/wetland-db-route#dbrouteall)) you'll have very powerful controllers with almost no code.

## Migrations

Migrations can be run using the cli tool. Stix-cli (`yarn global add stix-cli`) offers the following methods when using stix-wetland (default in a `stix init` setup):

```
orm:migrator:create   -- Create a new migration file (name defaults to git branch name).
orm:migrator:dev      -- Diff against current mapping and run or output dev migrations.
orm:migrator:dump     -- Dump the SQL queries to stdout for orm:migrator:run instead of executing them.
orm:migrator:forward  -- Update the dev snapshot without running the migrations.
orm:migrator:regress  -- Regress to the state of a snapshot. Useful when testing your migrations
orm:migrator:run      -- Run one of the migrator methods. Make sure this is what you want before running.
orm:migrator:schema   -- Create the database schema.
orm:migrator:status   -- Output the status of your migrations.
```
