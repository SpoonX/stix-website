---
title: ServerService
id: version-2.0.0-serverservice
original_id: serverservice
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

*Defined in [Library/Server/ServerService.ts:15](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| application | [Application](application) |

**Returns:** [ServerService](serverservice)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/Server/ServerService.ts:13](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L13)*

___
<a id="config"></a>

### `Private` config

**config**: *[ServerConfigInterface](../interfaces/serverconfiginterface)*

*Defined in [Library/Server/ServerService.ts:15](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L15)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/ServerService.ts:11](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L11)*

___

## Methods

<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/ServerService.ts:76](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L76)*

**Returns:** `Koa`

___
<a id="indexofmiddleware"></a>

###  indexOfMiddleware

**indexOfMiddleware**(middleware: * `string` &#124; `Middleware`*): `number`

*Defined in [Library/Server/ServerService.ts:53](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|

**Returns:** `number`

___
<a id="initialize"></a>

###  initialize

**initialize**(config: *[ServerConfigInterface](../interfaces/serverconfiginterface)*): `Promise`<`void`>

*Defined in [Library/Server/ServerService.ts:61](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ServerConfigInterface](../interfaces/serverconfiginterface) |

**Returns:** `Promise`<`void`>

___
<a id="replace"></a>

###  replace

**replace**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:37](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/ServerService.ts:80](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L80)*

**Returns:** `this`

___
<a id="updatemiddleware"></a>

###  updateMiddleware

**updateMiddleware**(at: *`number`*, remove: *`number`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:41](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| at | `number` |
| remove | `number` |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:23](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="useafter"></a>

###  useAfter

**useAfter**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:33](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___
<a id="usebefore"></a>

###  useBefore

**useBefore**(middleware: * `string` &#124; `Middleware`*, ...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:29](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Server/ServerService.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| middleware |  `string` &#124; `Middleware`|
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___

