---
title: Router
id: version-0.1.0-router
original_id: router
---

# `Class` Router

## Hierarchy

**Router**

## Index

### Constructors

* [constructor](router#constructor)

### Properties

* [config](router#config)
* [routes](router#routes)

### Methods

* [buildParameters](router#buildparameters)
* [match](router#match)
* [registerRoute](router#registerroute)
* [registerRoutes](router#registerroutes)
* [resolve](router#resolve)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Router**(config: *[RouterConfigInterface](../interfaces/routerconfiginterface)*): [Router](router)

*Defined in [Library/Router/Router.ts:10](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [RouterConfigInterface](../interfaces/routerconfiginterface) |

**Returns:** [Router](router)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[RouterConfigInterface](../interfaces/routerconfiginterface)*

*Defined in [Library/Router/Router.ts:10](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L10)*

___
<a id="routes"></a>

### `Private` routes

**routes**: *`Array`<[RegisteredRouteInterface](../interfaces/registeredrouteinterface)>* =  []

*Defined in [Library/Router/Router.ts:8](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L8)*

___

## Methods

<a id="buildparameters"></a>

###  buildParameters

**buildParameters**(from: *`Array`<`Key`>*, result: *`RegExpExecArray`*): `__type`

*Defined in [Library/Router/Router.ts:73](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| from | `Array`<`Key`> |
| result | `RegExpExecArray` |

**Returns:** `__type`

___
<a id="match"></a>

###  match

**match**(target: *`string`*, route: *[RegisteredRouteInterface](../interfaces/registeredrouteinterface)*): `__type`

*Defined in [Library/Router/Router.ts:36](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `string` |
| route | [RegisteredRouteInterface](../interfaces/registeredrouteinterface) |

**Returns:** `__type`

___
<a id="registerroute"></a>

###  registerRoute

**registerRoute**(method: *[RequestMethods](../enums/requestmethods)*, route: *`string`*, controller: *`object`*, action: *`string`*): `this`

*Defined in [Library/Router/Router.ts:64](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L64)*

**Parameters:**

**method: [RequestMethods](../enums/requestmethods)**

**route: `string`**

**controller: `object`**

| Name | Type |
| ------ | ------ |
| constructor |  |

**action: `string`**

**Returns:** `this`

___
<a id="registerroutes"></a>

###  registerRoutes

**registerRoutes**(routes: *`Array`< [RouteInterface](../interfaces/routeinterface) &#124; `Array`<[RouteInterface](../interfaces/routeinterface)>>*): `this`

*Defined in [Library/Router/Router.ts:50](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| routes | `Array`< [RouteInterface](../interfaces/routeinterface) &#124; `Array`<[RouteInterface](../interfaces/routeinterface)>> |

**Returns:** `this`

___
<a id="resolve"></a>

###  resolve

**resolve**(method: *[RequestMethods](../enums/requestmethods)*, target: *`string`*):  `object` &#124; `null`

*Defined in [Library/Router/Router.ts:18](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Router/Router.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [RequestMethods](../enums/requestmethods) |
| target | `string` |

**Returns:**  `object` &#124; `null`

___

