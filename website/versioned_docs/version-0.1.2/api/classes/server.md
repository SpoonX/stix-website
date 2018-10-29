---
title: Server
id: version-0.1.2-server
original_id: server
---

# `Class` Server

## Hierarchy

**Server**

## Index

### Constructors

* [constructor](server#constructor)

### Properties

* [application](server#application)
* [config](server#config)
* [server](server#server)

### Methods

* [create](server#create)
* [getServer](server#getserver)
* [initialize](server#initialize)
* [start](server#start)
* [use](server#use)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Server**(application: *[Application](application)*, config?: *[ServerConfigInterface](../interfaces/serverconfiginterface)*): [Server](server)

*Defined in [Library/Server/Server.ts:17](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| application | [Application](application) | - |
| `Default value` config | [ServerConfigInterface](../interfaces/serverconfiginterface) |  {} |

**Returns:** [Server](server)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/Server/Server.ts:17](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L17)*

___
<a id="config"></a>

### `Private` config

**config**: *[ServerConfigInterface](../interfaces/serverconfiginterface)*

*Defined in [Library/Server/Server.ts:15](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L15)*

___
<a id="server"></a>

### `Private` server

**server**: *`Koa`*

*Defined in [Library/Server/Server.ts:13](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L13)*

___

## Methods

<a id="create"></a>

### `Private` create

**create**(): `this`

*Defined in [Library/Server/Server.ts:26](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L26)*

**Returns:** `this`

___
<a id="getserver"></a>

###  getServer

**getServer**(): `Koa`

*Defined in [Library/Server/Server.ts:55](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L55)*

**Returns:** `Koa`

___
<a id="initialize"></a>

###  initialize

**initialize**(): `Promise`<`void`>

*Defined in [Library/Server/Server.ts:38](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L38)*

**Returns:** `Promise`<`void`>

___
<a id="start"></a>

###  start

**start**(): `this`

*Defined in [Library/Server/Server.ts:59](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L59)*

**Returns:** `this`

___
<a id="use"></a>

###  use

**use**(...middlewares: *`Array`<`Middleware`>*): `this`

*Defined in [Library/Server/Server.ts:32](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Server/Server.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` middlewares | `Array`<`Middleware`> |

**Returns:** `this`

___

