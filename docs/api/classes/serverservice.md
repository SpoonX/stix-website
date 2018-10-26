---
title: ServerService
---

# `Class` ServerService

## Hierarchy

**ServerService**

## Index

### Constructors

* [constructor](serverservice#constructor)

### Properties

* [application](serverservice#application)
* [config](serverservice#config)
* [server](serverservice#server)

### Methods

* [getServer](serverservice#getserver)
* [indexOfMiddleware](serverservice#indexofmiddleware)
* [initialize](serverservice#initialize)
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

**new ServerService**(application: *[Application](application)*): [ServerService](serverservice)

*Defined in [Library/Server/ServerService.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| application | [Application](application) |

**Returns:** [ServerService](serverservice)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/Server/ServerService.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L11)*

___
<a id="config"></a>

### `Private` config

**config**: *[ServerConfigInterface](../interfaces/serverconfiginterface)*

*Defined in [Library/Server/ServerService.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L13)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/ServerService.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L9)*

___

## Methods

<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/ServerService.ts:74](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L74)*

**Returns:** `Koa`

___
<a id="indexofmiddleware"></a>

###  indexOfMiddleware

**indexOfMiddleware**(middleware: * `string` &#124; `Middleware`*): `number`

*Defined in [Library/Server/ServerService.ts:51](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|

**Returns:** `number`

___
<a id="initialize"></a>

###  initialize

**initialize**(config: *[ServerConfigInterface](../interfaces/serverconfiginterface)*): `Promise`<`void`>

*Defined in [Library/Server/ServerService.ts:59](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [ServerConfigInterface](../interfaces/serverconfiginterface) |

**Returns:** `Promise`<`void`>

___
<a id="replace"></a>

###  replace

**replace**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:35](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/ServerService.ts:78](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L78)*

**Returns:** `this`

___
<a id="updatemiddleware"></a>

###  updateMiddleware

**updateMiddleware**(at: *`number`*, remove: *`number`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:39](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| at | `number` |
| remove | `number` |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:21](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="useafter"></a>

###  useAfter

**useAfter**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:31](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="usebefore"></a>

###  useBefore

**useBefore**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:27](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerService.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___

