---
title: ServerService
id: version-1.0.2-serverservice
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

* [create](serverservice#create)
* [getServer](serverservice#getserver)
* [initialize](serverservice#initialize)
* [start](serverservice#start)
* [use](serverservice#use)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServerService**(application: *[Application](application)*, config?: *[ServerConfigInterface](../interfaces/serverconfiginterface)*): [ServerService](serverservice)

*Defined in [Library/Server/ServerService.ts:17](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| application | [Application](application) | - |
| `Default value` config | [ServerConfigInterface](../interfaces/serverconfiginterface) |  {} |

**Returns:** [ServerService](serverservice)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/Server/ServerService.ts:17](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L17)*

___
<a id="config"></a>

### `Private` config

**config**: *[ServerConfigInterface](../interfaces/serverconfiginterface)*

*Defined in [Library/Server/ServerService.ts:15](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L15)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/ServerService.ts:13](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L13)*

___

## Methods

<a id="create"></a>

### `Private` create

**create**(): `this`

*Defined in [Library/Server/ServerService.ts:26](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L26)*

**Returns:** `this`

___
<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/ServerService.ts:55](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L55)*

**Returns:** `Koa`

___
<a id="initialize"></a>

###  initialize

**initialize**(): `Promise`<`void`>

*Defined in [Library/Server/ServerService.ts:38](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L38)*

**Returns:** `Promise`<`void`>

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/ServerService.ts:59](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L59)*

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/ServerService.ts:32](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Server/ServerService.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___

