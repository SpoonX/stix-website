---
title: ModuleManager
---

# `Class` ModuleManager

## Hierarchy

**ModuleManager**

## Index

### Constructors

* [constructor](modulemanager#constructor)

### Properties

* [application](modulemanager#application)
* [config](modulemanager#config)
* [eventManager](modulemanager#eventmanager)

### Methods

* [bootstrap](modulemanager#bootstrap)
* [getApplication](modulemanager#getapplication)
* [getEventManager](modulemanager#geteventmanager)
* [loadModule](modulemanager#loadmodule)
* [loadModules](modulemanager#loadmodules)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ModuleManager**(application: *[Application](application)*, eventManager: *[EventManager](eventmanager)*, config: *[Config](config)*): [ModuleManager](modulemanager)

*Defined in [Library/ModuleManager/ModuleManager.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| application | [Application](application) |
| eventManager | [EventManager](eventmanager) |
| config | [Config](config) |

**Returns:** [ModuleManager](modulemanager)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/ModuleManager/ModuleManager.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L15)*

___
<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/ModuleManager/ModuleManager.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L11)*

___
<a id="eventmanager"></a>

### `Private` eventManager

**eventManager**: *[EventManager](eventmanager)*

*Defined in [Library/ModuleManager/ModuleManager.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L13)*

___

## Methods

<a id="bootstrap"></a>

###  bootstrap

**bootstrap**(): `Promise`<`boolean`>

*Defined in [Library/ModuleManager/ModuleManager.ts:23](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L23)*

**Returns:** `Promise`<`boolean`>

___
<a id="getapplication"></a>

###  getApplication

**getApplication**(): [Application](application)

*Defined in [Library/ModuleManager/ModuleManager.ts:65](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L65)*

**Returns:** [Application](application)

___
<a id="geteventmanager"></a>

###  getEventManager

**getEventManager**(): [EventManager](eventmanager)

*Defined in [Library/ModuleManager/ModuleManager.ts:61](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L61)*

**Returns:** [EventManager](eventmanager)

___
<a id="loadmodule"></a>

###  loadModule

**loadModule**(ModuleClass: *[ModuleClassInterface](../interfaces/moduleclassinterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:27](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ModuleClass | [ModuleClassInterface](../interfaces/moduleclassinterface) |

**Returns:** `Promise`<`this`>

___
<a id="loadmodules"></a>

###  loadModules

**loadModules**(config: *[ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:69](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface) |

**Returns:** `Promise`<`this`>

___

