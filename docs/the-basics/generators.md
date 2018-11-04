---
title: Generators
---

Let's talk generators. If you've followed the documentation in order so far you may have seen it mentioned already.

Generators in stix are supplied through the [stix-generator](https://github.com/SpoonX/stix-generator) module.

## What are generators

Generators are simple commands that generate boilerplate code for you. They're available for use through the stix CLI or programmatically using the provided GeneratorService.

Let's walk through the available generators.

### generate:module

Generate a new module.

#### Command

> `stix generate:module <name>`

### generate:entity

Generate a new Wetland entity for provided module name.

#### Command

> `stix generate:crud <module> <name>`

| Param       | Description                   | Required | Default |
|-------------|-------------------------------|----------|---------|
| --field, -f | Fields for entity (multiple). | No       | N/A     |

_**Note:** More info on fields can be found at the end of this document._

### generate:controller

Controllers are classes that contain actions. This generator:

- Adds a route to the router config.
- Adds an action to the controller.
- If the controller doesn't exist yet, creates the controller.
- If the module doesn't exist yet, creates the module.

#### Command

> `stix generate:controller <module> <name>`

| Param      | Description                         | Required | Default |
|------------|-------------------------------------|----------|---------|
| --crud, -c | Add `@dbActions` from stix-wetland. | No       | `false` |

### generate:action

Actions are handlers for specific routes. This generator:

- Adds a route to the router config.
- Adds an action to the controller.
- If the controller doesn't exist yet, creates the controller.
- If the module doesn't exist yet, creates the module.

#### Command

> `stix generate:action <module> <controller> <name>`

| Param        | Description                        | Required | Default     |
|--------------|------------------------------------|----------|-------------|
| --route, -r  | The route for this action.         | No       | `/<action>` |
| --method, -m | The request method for this route. | No       | `get`       |

### generate:crud

Stix-wetland has decorators and route helpers to set up a complete CRUD feature set for resources/entities. This generator:

- Generates a new entity.
- Generates a new controller (with the crud option and thus said decorators).
- Adds a `DbRoute.all()` to your router config for your endpoint.
- If the module doesn't exist yet, creates the module.

#### Command

> `stix generate:crud <module> <name>`

| Param       | Description                    | Required | Default            |
|-------------|--------------------------------|----------|--------------------|
| --field, -f | Fields for entity (multiple).  | No       | N/A                |
| --route, -r | The endpoint for the resource. | No       | `/<module>/<name>` |

_**Note:** More info on fields can be found at the end of this document._

## More about Entity fields

The `field` option that is available in the entity and crud generators is very flexible.
It allows you to specify the property name followed by decorators to apply:

`propertyName.decorator(arguments)`

A more practical example:

`createdAt.field(type:datetime, defaultTo: now())`.

### Easy fields

By default, a field is a string. This means you can simply supply the name:

`-f username` and it'll translate to the full thing: `-f username.field(type: string)`.

In most cased you'll only want a different type. For those cases there's also a conveniece syntax: `property:type`.

Examples: `available:boolean`, `dateOfBirth:date`.

### now()

There's one "magic string" you can use for defaults which is `now()`. Whenever the generator finds the use of now() it gets replaced by `Mapping.now()`. Anything else defaults to a string.
