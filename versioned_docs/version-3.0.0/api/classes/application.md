---
title: Application
id: version-3.0.0-application
original_id: application
---

# `Class` Application

This class is Stix's heart.

It is responsible for:

*   Pass in the provided configuration to be handled by the Config class
*   Instantiating the Service Manager with vital services and factories registered
*   Bootstrapping the application
*   Starting the server
*   Providing convenient getters to stix's services

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

**new Application**(appConfig: *[ConfigType](../#configtype)*): [Application](application)

*Defined in [Library/Application/Application.ts:74](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L74)*

The constructor creates new instances of [Config](config.md) and [ServiceManager](servicemanager.md). In the [Config constructor](config.md#constructor), the provided config will be merged to the defaultConfig. The config provided by you can contain routes, controllers, references to installed modules and/or settings to override defaults, for example. The [Service Manager constructor](servicemanager.md#constructor) will be responsible for setting core services and factories.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| appConfig | [ConfigType](../#configtype) |  An object of configs from your application |

**Returns:** [Application](application)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:34](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L34)*

*__type__*: Config

___
<a id="controllermanager"></a>

### `Private` controllerManager

**controllerManager**: *[ControllerManager](controllermanager)*

*Defined in [Library/Application/Application.ts:59](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L59)*

*__type__*: ControllerManager

___
<a id="logger"></a>

### `Private` logger

**logger**: *[LoggerService](loggerservice)*

*Defined in [Library/Application/Application.ts:44](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L44)*

*__type__*: LoggerService

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:69](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L69)*

*__type__*: ModuleManager

___
<a id="responseservice"></a>

### `Private` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Application/Application.ts:64](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L64)*

*__type__*: ResponseService

___
<a id="router"></a>

### `Private` router

**router**: *[RouterService](routerservice)*

*Defined in [Library/Application/Application.ts:49](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L49)*

*__type__*: RouterService

___
<a id="server"></a>

### `Private` server

**server**: *[ServerService](serverservice)*

*Defined in [Library/Application/Application.ts:54](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L54)*

*__type__*: ServerService

___
<a id="servicemanager"></a>

### `Private` serviceManager

**serviceManager**: *[ServiceManager](servicemanager)*

*Defined in [Library/Application/Application.ts:39](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L39)*

*__type__*: ServiceManager

___
<a id="sharedeventmanager"></a>

### `Private` sharedEventManager

**sharedEventManager**: *[SharedEventManager](sharedeventmanager)*

*Defined in [Library/Application/Application.ts:74](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L74)*

*__type__*: SharedEventManager

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:116](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L116)*

This async method is responsible for loading modules and registering essential services. After all modules are loaded and the core's middleware are set, we bootstrap every registered module that we found in the config. After everything is done we emit a `'ready'` event, which allows the listeners to execute before the server starts.

**Returns:** `Promise`<`this`>

___
<a id="getconfig"></a>

###  getConfig

**getConfig**(): [Config](config)

*Defined in [Library/Application/Application.ts:232](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L232)*

Gets the Config instance.

**Returns:** [Config](config)

___
<a id="getconfigof"></a>

###  getConfigOf

**getConfigOf**<`T`>(section: *`string`*): `T`

*Defined in [Library/Application/Application.ts:223](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L223)*

Convenience method to get the config of a specific section.

Same results could be achieved using the [getConfig method](application.md#getconfig) as seen bellow:

```
app.getConfig().of('router');
```
*__template__*: T

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| section | `string` |  - |

**Returns:** `T`

___
<a id="getcontrollermanager"></a>

###  getControllerManager

**getControllerManager**(): [ControllerManager](controllermanager)

*Defined in [Library/Application/Application.ts:180](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L180)*

Gets the Controller Manager.

**Returns:** [ControllerManager](controllermanager)

___
<a id="getlogger"></a>

###  getLogger

**getLogger**(): [LoggerService](loggerservice)

*Defined in [Library/Application/Application.ts:153](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L153)*

Gets the Logger Service.

**Returns:** [LoggerService](loggerservice)

___
<a id="getmodulemanager"></a>

###  getModuleManager

**getModuleManager**(): [ModuleManager](modulemanager)

*Defined in [Library/Application/Application.ts:189](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L189)*

Gets the Module Manager.

**Returns:** [ModuleManager](modulemanager)

___
<a id="getresponseservice"></a>

###  getResponseService

**getResponseService**(): [ResponseService](responseservice)

*Defined in [Library/Application/Application.ts:198](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L198)*

Gets the Response Service.

**Returns:** [ResponseService](responseservice)

___
<a id="getrouter"></a>

###  getRouter

**getRouter**(): [RouterService](routerservice)

*Defined in [Library/Application/Application.ts:162](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L162)*

Gets the Router Service.

**Returns:** [RouterService](routerservice)

___
<a id="getserver"></a>

###  getServer

**getServer**(): [ServerService](serverservice)

*Defined in [Library/Application/Application.ts:171](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L171)*

Gets the Server Service.

**Returns:** [ServerService](serverservice)

___
<a id="getservicemanager"></a>

###  getServiceManager

**getServiceManager**(): [ServiceManager](servicemanager)

*Defined in [Library/Application/Application.ts:207](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L207)*

Gets the Service Manager.

**Returns:** [ServiceManager](servicemanager)

___
<a id="launch"></a>

###  launch

**launch**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:243](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L243)*

Asynchronously launches the application.

This method first calls bootstrap and, when that is done, starts the server.

**Returns:** `Promise`<`this`>

___

