---
title: Application
id: version-3.0.1-application
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
* [responseService](application#responseservice)
* [router](application#router)
* [server](application#server)
* [serviceManager](application#servicemanager)
* [sharedEventManager](application#sharedeventmanager)

### Methods

* [bootstrap](application#bootstrap)
* [getConfig](application#getconfig)
* [getConfigOf](application#getconfigof)
* [getControllerManager](application#getcontrollermanager)
* [getLogger](application#getlogger)
* [getModuleManager](application#getmodulemanager)
* [getResponseService](application#getresponseservice)
* [getRouter](application#getrouter)
* [getServer](application#getserver)
* [getServiceManager](application#getservicemanager)
* [launch](application#launch)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Application**(appConfig: *[ConfigType](../modules/configinterface#configtype)*): [Application](application)

*Defined in [Library/Application/Application.ts:38](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| appConfig | [ConfigType](../modules/configinterface#configtype) |

**Returns:** [Application](application)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:22](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L22)*

___
<a id="controllermanager"></a>

### `Private` controllerManager

**controllerManager**: *[ControllerManager](controllermanager)*

*Defined in [Library/Application/Application.ts:32](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L32)*

___
<a id="logger"></a>

### `Private` logger

**logger**: *[LoggerService](loggerservice)*

*Defined in [Library/Application/Application.ts:26](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L26)*

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:36](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L36)*

___
<a id="responseservice"></a>

### `Private` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Application/Application.ts:34](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L34)*

___
<a id="router"></a>

### `Private` router

**router**: *[RouterService](routerservice)*

*Defined in [Library/Application/Application.ts:28](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L28)*

___
<a id="server"></a>

### `Private` server

**server**: *[ServerService](serverservice)*

*Defined in [Library/Application/Application.ts:30](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L30)*

___
<a id="servicemanager"></a>

### `Private` serviceManager

**serviceManager**: *[ServiceManager](servicemanager)*

*Defined in [Library/Application/Application.ts:24](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L24)*

___
<a id="sharedeventmanager"></a>

### `Private` sharedEventManager

**sharedEventManager**: *[SharedEventManager](sharedeventmanager)*

*Defined in [Library/Application/Application.ts:38](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L38)*

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:61](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L61)*

**Returns:** `Promise`<`this`>

___
<a id="getconfig"></a>

###  getConfig

**getConfig**(): [Config](config)

*Defined in [Library/Application/Application.ts:125](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L125)*

**Returns:** [Config](config)

___
<a id="getconfigof"></a>

###  getConfigOf

**getConfigOf**<`T`>(section: *`string`*): `T`

*Defined in [Library/Application/Application.ts:121](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L121)*

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

*Defined in [Library/Application/Application.ts:105](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L105)*

**Returns:** [ControllerManager](controllermanager)

___
<a id="getlogger"></a>

###  getLogger

**getLogger**(): [LoggerService](loggerservice)

*Defined in [Library/Application/Application.ts:93](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L93)*

**Returns:** [LoggerService](loggerservice)

___
<a id="getmodulemanager"></a>

###  getModuleManager

**getModuleManager**(): [ModuleManager](modulemanager)

*Defined in [Library/Application/Application.ts:109](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L109)*

**Returns:** [ModuleManager](modulemanager)

___
<a id="getresponseservice"></a>

###  getResponseService

**getResponseService**(): [ResponseService](responseservice)

*Defined in [Library/Application/Application.ts:113](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L113)*

**Returns:** [ResponseService](responseservice)

___
<a id="getrouter"></a>

###  getRouter

**getRouter**(): [RouterService](routerservice)

*Defined in [Library/Application/Application.ts:97](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L97)*

**Returns:** [RouterService](routerservice)

___
<a id="getserver"></a>

###  getServer

**getServer**(): [ServerService](serverservice)

*Defined in [Library/Application/Application.ts:101](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L101)*

**Returns:** [ServerService](serverservice)

___
<a id="getservicemanager"></a>

###  getServiceManager

**getServiceManager**(): [ServiceManager](servicemanager)

*Defined in [Library/Application/Application.ts:117](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L117)*

**Returns:** [ServiceManager](servicemanager)

___
<a id="launch"></a>

###  launch

**launch**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:129](https://github.com/SpoonX/stix/blob/f097835/src/Library/Application/Application.ts#L129)*

**Returns:** `Promise`<`this`>

___

