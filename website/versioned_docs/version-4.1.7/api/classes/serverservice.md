---
title: ServerService
id: version-4.1.7-serverservice
original_id: serverservice
---

# `Class` ServerService

## Hierarchy

**ServerService**

## Index

### Constructors

* [constructor](serverservice#constructor)

### Properties

* [middleware](serverservice#middleware)
* [port](serverservice#port)
* [server](serverservice#server)

### Methods

* [asCallback](serverservice#ascallback)
* [getServer](serverservice#getserver)
* [indexOfMiddleware](serverservice#indexofmiddleware)
* [replace](serverservice#replace)
* [start](serverservice#start)
* [updateMiddleware](serverservice#updatemiddleware)
* [use](serverservice#use)
* [useAfter](serverservice#useafter)
* [useBefore](serverservice#usebefore)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServerService**(mode: *[ApplicationModes](../enums/applicationmodes)*, port: *`number`*, middleware: *`Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)>*): [ServerService](serverservice)

*Defined in [Library/Server/ServerService.ts:11](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [ApplicationModes](../enums/applicationmodes) |
| port | `number` |
| middleware | `Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)> |

**Returns:** [ServerService](serverservice)

___

## Properties

<a id="middleware"></a>

### `Private` middleware

**middleware**: *`Array`< [MiddlewareType](../modules/middlewaretypes#middlewaretype) &#124; [RegisteredMiddlewareType](../modules/middlewaretypes#registeredmiddlewaretype)>* =  []

*Defined in [Library/Server/ServerService.ts:11](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L11)*

___
<a id="port"></a>

### `Private` port

**port**: *`number`*

*Defined in [Library/Server/ServerService.ts:9](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L9)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/ServerService.ts:7](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L7)*

___

## Methods

<a id="ascallback"></a>

### `Private` asCallback

**asCallback**(middleware: *[MiddlewareType](../modules/middlewaretypes#middlewaretype)*): `Middleware`

*Defined in [Library/Server/ServerService.ts:82](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareType](../modules/middlewaretypes#middlewaretype) |

**Returns:** `Middleware`

___
<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/ServerService.ts:72](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L72)*

**Returns:** `Koa`

___
<a id="indexofmiddleware"></a>

###  indexOfMiddleware

**indexOfMiddleware**(middleware: *[MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype)*): `number`

*Defined in [Library/Server/ServerService.ts:50](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype) |

**Returns:** `number`

___
<a id="replace"></a>

###  replace

**replace**(middleware: *[MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype)*, ...middlewares: *`Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)>*): `this`

*Defined in [Library/Server/ServerService.ts:40](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype) |
| `Rest` middlewares | `Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)> |

**Returns:** `this`

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/ServerService.ts:76](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L76)*

**Returns:** `this`

___
<a id="updatemiddleware"></a>

###  updateMiddleware

**updateMiddleware**(at: *`number`*, remove: *`number`*, ...middlewares: *`Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)>*): `this`

*Defined in [Library/Server/ServerService.ts:44](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| at | `number` |
| remove | `number` |
| `Rest` middlewares | `Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)> |

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)>*): `this`

*Defined in [Library/Server/ServerService.ts:24](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)> |

**Returns:** `this`

___
<a id="useafter"></a>

###  useAfter

**useAfter**(middleware: *[MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype)*, ...middlewares: *`Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)>*): `this`

*Defined in [Library/Server/ServerService.ts:36](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype) |
| `Rest` middlewares | `Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)> |

**Returns:** `this`

___
<a id="usebefore"></a>

###  useBefore

**useBefore**(middleware: *[MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype)*, ...middlewares: *`Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)>*): `this`

*Defined in [Library/Server/ServerService.ts:32](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Server/ServerService.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType](../modules/middlewaretypes#middlewarelookuptype) |
| `Rest` middlewares | `Array`<[MiddlewareType](../modules/middlewaretypes#middlewaretype)> |

**Returns:** `this`

___

