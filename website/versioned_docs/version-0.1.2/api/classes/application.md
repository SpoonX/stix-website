---
title: Application
id: version-0.1.2-application
original_id: application
---

# `Class` Application

## Hierarchy

**Application**

## Index

### Constructors

* [constructor](application#constructor)

### Properties

* [config](application#config)
* [controllerManager](application#controllermanager)
* [logger](application#logger)
* [moduleManager](application#modulemanager)
* [responseManager](application#responsemanager)
* [router](application#router)
* [server](application#server)

### Methods

* [bootstrap](application#bootstrap)
* [getConfig](application#getconfig)
* [getControllerManager](application#getcontrollermanager)
* [getLogger](application#getlogger)
* [getResponseManager](application#getresponsemanager)
* [getRouter](application#getrouter)
* [getServer](application#getserver)
* [launch](application#launch)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Application**(config: *[ConfigInterface](../interfaces/configinterface)*): [Application](application)

*Defined in [Library/Application/Application.ts:35](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ConfigInterface](../interfaces/configinterface) |

**Returns:** [Application](application)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:23](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L23)*

___
<a id="controllermanager"></a>

### `Private` controllerManager

**controllerManager**: *[ControllerManager](controllermanager)*

*Defined in [Library/Application/Application.ts:31](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L31)*

___
<a id="logger"></a>

### `Private` logger

**logger**: *`Logger`*

*Defined in [Library/Application/Application.ts:25](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L25)*

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:35](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L35)*

___
<a id="responsemanager"></a>

### `Private` responseManager

**responseManager**: *[ResponseManager](responsemanager)*

*Defined in [Library/Application/Application.ts:33](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L33)*

___
<a id="router"></a>

### `Private` router

**router**: *[Router](router)*

*Defined in [Library/Application/Application.ts:27](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L27)*

___
<a id="server"></a>

### `Private` server

**server**: *[Server](server)*

*Defined in [Library/Application/Application.ts:29](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L29)*

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(config: *[Config](config)*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:43](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [Config](config) |

**Returns:** `Promise`<`this`>

___
<a id="getconfig"></a>

###  getConfig

**getConfig**<`T`>(section: *`string`*): `T`

*Defined in [Library/Application/Application.ts:77](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L77)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| section | `string` |

**Returns:** `T`

___
<a id="getcontrollermanager"></a>

###  getControllerManager

**getControllerManager**(): [ControllerManager](controllermanager)

*Defined in [Library/Application/Application.ts:69](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L69)*

**Returns:** [ControllerManager](controllermanager)

___
<a id="getlogger"></a>

###  getLogger

**getLogger**(): `Logger`

*Defined in [Library/Application/Application.ts:57](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L57)*

**Returns:** `Logger`

___
<a id="getresponsemanager"></a>

###  getResponseManager

**getResponseManager**(): [ResponseManager](responsemanager)

*Defined in [Library/Application/Application.ts:73](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L73)*

**Returns:** [ResponseManager](responsemanager)

___
<a id="getrouter"></a>

###  getRouter

**getRouter**(): [Router](router)

*Defined in [Library/Application/Application.ts:61](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L61)*

**Returns:** [Router](router)

___
<a id="getserver"></a>

###  getServer

**getServer**(): [Server](server)

*Defined in [Library/Application/Application.ts:65](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L65)*

**Returns:** [Server](server)

___
<a id="launch"></a>

###  launch

**launch**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:81](https://github.com/SpoonX/stix/blob/b66cd6b/src/Library/Application/Application.ts#L81)*

**Returns:** `Promise`<`this`>

___

