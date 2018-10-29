---
title: Application
id: version-1.0.1-application
original_id: application
---

# `Class` Application

## Hierarchy

**Application**

## Index

### Constructors

* [constructor](application#constructor)

### Properties

* [ResponseService](application#responseservice)
* [config](application#config)
* [controllerManager](application#controllermanager)
* [logger](application#logger)
* [moduleManager](application#modulemanager)
* [router](application#router)
* [server](application#server)
* [serviceManager](application#servicemanager)

### Methods

* [bootstrap](application#bootstrap)
* [getConfig](application#getconfig)
* [getControllerManager](application#getcontrollermanager)
* [getLogger](application#getlogger)
* [getModuleManager](application#getmodulemanager)
* [getResponseService](application#getresponseservice)
* [getRouter](application#getrouter)
* [getServer](application#getserver)
* [launch](application#launch)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Application**(appConfig: *[ConfigType](../modules/configinterface#configtype)*): [Application](application)

*Defined in [Library/Application/Application.ts:35](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| appConfig | [ConfigType](../modules/configinterface#configtype) |

**Returns:** [Application](application)

___

## Properties

<a id="responseservice"></a>

### `Private` ResponseService

**ResponseService**: *[ResponseService](responseservice)*

*Defined in [Library/Application/Application.ts:31](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L31)*

___
<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:21](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L21)*

___
<a id="controllermanager"></a>

### `Private` controllerManager

**controllerManager**: *[ControllerManager](controllermanager)*

*Defined in [Library/Application/Application.ts:29](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L29)*

___
<a id="logger"></a>

### `Private` logger

**logger**: *`Logger`*

*Defined in [Library/Application/Application.ts:23](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L23)*

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:33](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L33)*

___
<a id="router"></a>

### `Private` router

**router**: *[RouterService](routerservice)*

*Defined in [Library/Application/Application.ts:25](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L25)*

___
<a id="server"></a>

### `Private` server

**server**: *[ServerService](serverservice)*

*Defined in [Library/Application/Application.ts:27](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L27)*

___
<a id="servicemanager"></a>

### `Private` serviceManager

**serviceManager**: *[ServiceManager](servicemanager)*

*Defined in [Library/Application/Application.ts:35](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L35)*

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(config: *[Config](config)*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:53](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [Config](config) |

**Returns:** `Promise`<`this`>

___
<a id="getconfig"></a>

###  getConfig

**getConfig**<`T`>(section: *`string`*): `T`

*Defined in [Library/Application/Application.ts:91](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L91)*

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

*Defined in [Library/Application/Application.ts:79](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L79)*

**Returns:** [ControllerManager](controllermanager)

___
<a id="getlogger"></a>

###  getLogger

**getLogger**(): `Logger`

*Defined in [Library/Application/Application.ts:67](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L67)*

**Returns:** `Logger`

___
<a id="getmodulemanager"></a>

###  getModuleManager

**getModuleManager**(): [ModuleManager](modulemanager)

*Defined in [Library/Application/Application.ts:83](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L83)*

**Returns:** [ModuleManager](modulemanager)

___
<a id="getresponseservice"></a>

###  getResponseService

**getResponseService**(): [ResponseService](responseservice)

*Defined in [Library/Application/Application.ts:87](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L87)*

**Returns:** [ResponseService](responseservice)

___
<a id="getrouter"></a>

###  getRouter

**getRouter**(): [RouterService](routerservice)

*Defined in [Library/Application/Application.ts:71](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L71)*

**Returns:** [RouterService](routerservice)

___
<a id="getserver"></a>

###  getServer

**getServer**(): [ServerService](serverservice)

*Defined in [Library/Application/Application.ts:75](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L75)*

**Returns:** [ServerService](serverservice)

___
<a id="launch"></a>

###  launch

**launch**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:95](https://github.com/SpoonX/stix/blob/573086e/src/Library/Application/Application.ts#L95)*

**Returns:** `Promise`<`this`>

___

