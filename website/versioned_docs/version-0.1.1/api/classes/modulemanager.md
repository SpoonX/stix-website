---
title: ModuleManager
id: version-0.1.1-modulemanager
original_id: modulemanager
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

### Methods

* [initialize](modulemanager#initialize)
* [loadModule](modulemanager#loadmodule)
* [loadModules](modulemanager#loadmodules)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ModuleManager**(application: *[Application](application)*, config: *[ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface)*): [ModuleManager](modulemanager)

*Defined in [Library/ModuleManager/ModuleManager.ts:11](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| application | [Application](application) |
| config | [ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface) |

**Returns:** [ModuleManager](modulemanager)

___

## Properties

<a id="application"></a>

### `Private` application

**application**: *[Application](application)*

*Defined in [Library/ModuleManager/ModuleManager.ts:9](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L9)*

___
<a id="config"></a>

### `Private` config

**config**: *[ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface)*

*Defined in [Library/ModuleManager/ModuleManager.ts:11](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L11)*

___

## Methods

<a id="initialize"></a>

###  initialize

**initialize**(): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:18](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L18)*

**Returns:** `Promise`<`this`>

___
<a id="loadmodule"></a>

###  loadModule

**loadModule**(ModuleClass: *[ModuleClassInterface](../interfaces/moduleclassinterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:24](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ModuleClass | [ModuleClassInterface](../interfaces/moduleclassinterface) |

**Returns:** `Promise`<`this`>

___
<a id="loadmodules"></a>

###  loadModules

**loadModules**(config: *[ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface)*): `Promise`<`this`>

*Defined in [Library/ModuleManager/ModuleManager.ts:36](https://github.com/SpoonX/stix/blob/f075739/src/Library/ModuleManager/ModuleManager.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ModuleManagerConfigInterface](../interfaces/modulemanagerconfiginterface) |

**Returns:** `Promise`<`this`>

___

