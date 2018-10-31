---
title: ServerService
id: version-4.2.0-serverservice
original_id: serverservice
---

# `Class` ServerService

## Hierarchy

**ServerService**

## Index

### Constructors

* [constructor](serverservice#constructor)

### Properties

* [config](serverservice#config)
* [middleware](serverservice#middleware)
* [server](serverservice#server)

### Methods

* [asCallback](serverservice#ascallback)
* [getServer](serverservice#getserver)
* [getURL](serverservice#geturl)
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

**new ServerService**(mode: *[ApplicationModes](../enums/applicationmodes)*, config: *[ServerConfigInterface](../interfaces/serverconfiginterface)*, middleware: *`Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)>*): [ServerService](serverservice)

*Defined in [Library/Server/ServerService.ts:13](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [ApplicationModes](../enums/applicationmodes) |
| config | [ServerConfigInterface](../interfaces/serverconfiginterface) |
| middleware | `Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)> |

**Returns:** [ServerService](serverservice)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[ServerConfigInterface](../interfaces/serverconfiginterface)*

*Defined in [Library/Server/ServerService.ts:11](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L11)*

___
<a id="middleware"></a>

### `Private` middleware

**middleware**: *`Array`< [MiddlewareType]() &#124; [RegisteredMiddlewareType]()>* =  []

*Defined in [Library/Server/ServerService.ts:13](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L13)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/ServerService.ts:9](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L9)*

___

## Methods

<a id="ascallback"></a>

### `Private` asCallback

**asCallback**(middleware: *[MiddlewareType]()*): `Middleware`

*Defined in [Library/Server/ServerService.ts:94](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareType]() |

**Returns:** `Middleware`

___
<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/ServerService.ts:74](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L74)*

**Returns:** `Koa`

___
<a id="geturl"></a>

###  getURL

**getURL**(): `string`

*Defined in [Library/Server/ServerService.ts:78](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L78)*

**Returns:** `string`

___
<a id="indexofmiddleware"></a>

###  indexOfMiddleware

**indexOfMiddleware**(middleware: *[MiddlewareLookupType]()*): `number`

*Defined in [Library/Server/ServerService.ts:52](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType]() |

**Returns:** `number`

___
<a id="replace"></a>

###  replace

**replace**(middleware: *[MiddlewareLookupType]()*, ...middlewares: *`Array`<[MiddlewareType]()>*): `this`

*Defined in [Library/Server/ServerService.ts:42](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType]() |
| `Rest` middlewares | `Array`<[MiddlewareType]()> |

**Returns:** `this`

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/ServerService.ts:84](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L84)*

**Returns:** `this`

___
<a id="updatemiddleware"></a>

###  updateMiddleware

**updateMiddleware**(at: *`number`*, remove: *`number`*, ...middlewares: *`Array`<[MiddlewareType]()>*): `this`

*Defined in [Library/Server/ServerService.ts:46](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| at | `number` |
| remove | `number` |
| `Rest` middlewares | `Array`<[MiddlewareType]()> |

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)>*): `this`

*Defined in [Library/Server/ServerService.ts:26](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`< `Middleware` &#124; [AbstractMiddleware](abstractmiddleware)> |

**Returns:** `this`

___
<a id="useafter"></a>

###  useAfter

**useAfter**(middleware: *[MiddlewareLookupType]()*, ...middlewares: *`Array`<[MiddlewareType]()>*): `this`

*Defined in [Library/Server/ServerService.ts:38](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType]() |
| `Rest` middlewares | `Array`<[MiddlewareType]()> |

**Returns:** `this`

___
<a id="usebefore"></a>

###  useBefore

**useBefore**(middleware: *[MiddlewareLookupType]()*, ...middlewares: *`Array`<[MiddlewareType]()>*): `this`

*Defined in [Library/Server/ServerService.ts:34](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Server/ServerService.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware | [MiddlewareLookupType]() |
| `Rest` middlewares | `Array`<[MiddlewareType]()> |

**Returns:** `this`

___

