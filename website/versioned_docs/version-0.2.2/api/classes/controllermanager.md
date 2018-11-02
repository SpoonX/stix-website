---
title: ControllerManager
id: version-0.2.2-controllermanager
original_id: controllermanager
---

# `Class` ControllerManager

## Hierarchy

**ControllerManager**

## Index

### Constructors

* [constructor](controllermanager#constructor)

### Properties

* [config](controllermanager#config)
* [controllers](controllermanager#controllers)

### Methods

* [getController](controllermanager#getcontroller)
* [loadControllers](controllermanager#loadcontrollers)
* [registerController](controllermanager#registercontroller)
* [registerControllers](controllermanager#registercontrollers)
* [getControllerName](controllermanager#getcontrollername)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ControllerManager**(config: *[ControllerManagerConfigInterface](../interfaces/controllermanagerconfiginterface)*): [ControllerManager](controllermanager)

*Defined in [Library/Controller/ControllerManager.ts:17](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ControllerManagerConfigInterface](../interfaces/controllermanagerconfiginterface) |

**Returns:** [ControllerManager](controllermanager)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[ControllerManagerConfigInterface](../interfaces/controllermanagerconfiginterface)*

*Defined in [Library/Controller/ControllerManager.ts:9](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L9)*

___
<a id="controllers"></a>

### `Private` controllers

**controllers**: *`object`*

*Defined in [Library/Controller/ControllerManager.ts:7](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L7)*

#### Type declaration

[controllerName: `string`]: `Object`

___

## Methods

<a id="getcontroller"></a>

###  getController

**getController**(controller: *[ControllerType]()*): `Object`

*Defined in [Library/Controller/ControllerManager.ts:50](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controller | [ControllerType]() |

**Returns:** `Object`

___
<a id="loadcontrollers"></a>

###  loadControllers

**loadControllers**(controllerDirectory: *`string`*): `void`

*Defined in [Library/Controller/ControllerManager.ts:25](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllerDirectory | `string` |

**Returns:** `void`

___
<a id="registercontroller"></a>

###  registerController

**registerController**(Controller: *[ControllerInterface](../interfaces/controllerinterface)*): `this`

*Defined in [Library/Controller/ControllerManager.ts:60](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Controller | [ControllerInterface](../interfaces/controllerinterface) |

**Returns:** `this`

___
<a id="registercontrollers"></a>

###  registerControllers

**registerControllers**(controllers: *`Array`<[ControllerInterface](../interfaces/controllerinterface)>*): `this`

*Defined in [Library/Controller/ControllerManager.ts:54](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllers | `Array`<[ControllerInterface](../interfaces/controllerinterface)> |

**Returns:** `this`

___
<a id="getcontrollername"></a>

### `Static` getControllerName

**getControllerName**(controller: *[ControllerType]()*): `string`

*Defined in [Library/Controller/ControllerManager.ts:11](https://github.com/SpoonX/stix/blob/b865310/src/Library/Controller/ControllerManager.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controller | [ControllerType]() |

**Returns:** `string`

___

