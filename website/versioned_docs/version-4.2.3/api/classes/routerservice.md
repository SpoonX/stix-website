---
title: RouterService
id: version-4.2.3-routerservice
original_id: routerservice
---

# `Class` RouterService

## Hierarchy

**RouterService**

## Index

### Constructors

* [constructor](routerservice#constructor)

### Properties

* [config](routerservice#config)
* [routes](routerservice#routes)

### Methods

* [buildParameters](routerservice#buildparameters)
* [getRegisteredRoutes](routerservice#getregisteredroutes)
* [match](routerservice#match)
* [registerRoute](routerservice#registerroute)
* [registerRoutes](routerservice#registerroutes)
* [resolve](routerservice#resolve)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new RouterService**(config: *[RouterConfigInterface](../interfaces/routerconfiginterface)*): [RouterService](routerservice)

*Defined in [Library/Router/RouterService.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [RouterConfigInterface](../interfaces/routerconfiginterface) |

**Returns:** [RouterService](routerservice)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[RouterConfigInterface](../interfaces/routerconfiginterface)*

*Defined in [Library/Router/RouterService.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L11)*

___
<a id="routes"></a>

### `Private` routes

**routes**: *[RegisteredRouteInterface](../interfaces/registeredrouteinterface)[]* =  []

*Defined in [Library/Router/RouterService.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L9)*

___

## Methods

<a id="buildparameters"></a>

###  buildParameters

**buildParameters**(from: *`Array`<`Key`>*, result: *`RegExpExecArray`*): `__type`

*Defined in [Library/Router/RouterService.ts:78](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| from | `Array`<`Key`> |
| result | `RegExpExecArray` |

**Returns:** `__type`

___
<a id="getregisteredroutes"></a>

###  getRegisteredRoutes

**getRegisteredRoutes**(): [RegisteredRouteInterface](../interfaces/registeredrouteinterface)[]

*Defined in [Library/Router/RouterService.ts:74](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L74)*

**Returns:** [RegisteredRouteInterface](../interfaces/registeredrouteinterface)[]

___
<a id="match"></a>

###  match

**match**(target: *`string`*, route: *[RegisteredRouteInterface](../interfaces/registeredrouteinterface)*): `__type`

*Defined in [Library/Router/RouterService.ts:37](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `string` |
| route | [RegisteredRouteInterface](../interfaces/registeredrouteinterface) |

**Returns:** `__type`

___
<a id="registerroute"></a>

###  registerRoute

**registerRoute**(method: *[RequestMethods](../enums/requestmethods)*, route: *`string`*, controller: *[AbstractActionController](abstractactioncontroller)*, action: *`string`*): `this`

*Defined in [Library/Router/RouterService.ts:65](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [RequestMethods](../enums/requestmethods) |
| route | `string` |
| controller | [AbstractActionController](abstractactioncontroller) |
| action | `string` |

**Returns:** `this`

___
<a id="registerroutes"></a>

###  registerRoutes

**registerRoutes**(routes: *`Array`< [RouteInterface](../interfaces/routeinterface) &#124; `Array`<[RouteInterface](../interfaces/routeinterface)>>*): `this`

*Defined in [Library/Router/RouterService.ts:51](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| routes | `Array`< [RouteInterface](../interfaces/routeinterface) &#124; `Array`<[RouteInterface](../interfaces/routeinterface)>> |

**Returns:** `this`

___
<a id="resolve"></a>

###  resolve

**resolve**(method: *[RequestMethods](../enums/requestmethods)*, target: *`string`*):  `object` &#124; `null`

*Defined in [Library/Router/RouterService.ts:19](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterService.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [RequestMethods](../enums/requestmethods) |
| target | `string` |

**Returns:**  `object` &#124; `null`

___

