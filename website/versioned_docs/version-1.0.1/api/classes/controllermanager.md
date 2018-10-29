---
title: ControllerManager
id: version-1.0.1-controllermanager
original_id: controllermanager
---

# `Class` ControllerManager

## Hierarchy

↳  [AbstractPluginManager](abstractpluginmanager)

**↳ ControllerManager**

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](controllermanager#constructor)

### Properties

* [creationContext](controllermanager#creationcontext)

### Methods

* [configure](controllermanager#configure)
* [get](controllermanager#get)
* [getController](controllermanager#getcontroller)
* [has](controllermanager#has)
* [loadControllers](controllermanager#loadcontrollers)
* [registerController](controllermanager#registercontroller)
* [registerControllers](controllermanager#registercontrollers)
* [registerFactories](controllermanager#registerfactories)
* [registerFactory](controllermanager#registerfactory)
* [registerService](controllermanager#registerservice)
* [getControllerName](controllermanager#getcontrollername)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ControllerManager**(creationContext: *[ServiceManager](servicemanager)*, config: *[ControllerManagerConfigType](../modules/controllermanagerconfigtype#controllermanagerconfigtype)*): [ControllerManager](controllermanager)

*Overrides [AbstractPluginManager](abstractpluginmanager).[constructor](abstractpluginmanager#constructor)*

*Defined in [Library/Controller/ControllerManager.ts:10](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| config | [ControllerManagerConfigType](../modules/controllermanagerconfigtype#controllermanagerconfigtype) |

**Returns:** [ControllerManager](controllermanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Inherited from [AbstractPluginManager](abstractpluginmanager).[creationContext](abstractpluginmanager#creationcontext)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:78](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype) |

**Returns:** `this`

___
<a id="get"></a>

###  get

**get**<`T`>(Service: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*, forceTransient?: *`boolean`*): `T`

*Inherited from [ServiceManager](servicemanager).[get](servicemanager#get)*

*Defined in [Library/ServiceManager/ServiceManager.ts:31](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L31)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="getcontroller"></a>

###  getController

**getController**(controller: *[ControllerType](../modules/controllertypes#controllertype)*): `Object`

*Defined in [Library/Controller/ControllerManager.ts:52](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controller | [ControllerType](../modules/controllertypes#controllertype) |

**Returns:** `Object`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*): `boolean`

*Inherited from [ServiceManager](servicemanager).[has](servicemanager#has)*

*Defined in [Library/ServiceManager/ServiceManager.ts:52](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L52)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> |

**Returns:** `boolean`

___
<a id="loadcontrollers"></a>

###  loadControllers

**loadControllers**(controllerDirectory: *`string`*): `void`

*Defined in [Library/Controller/ControllerManager.ts:27](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllerDirectory | `string` |

**Returns:** `void`

___
<a id="registercontroller"></a>

### `Protected` registerController

**registerController**(Controller: *[AbstractActionController](abstractactioncontroller)*): `this`

*Defined in [Library/Controller/ControllerManager.ts:62](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Controller | [AbstractActionController](abstractactioncontroller) |

**Returns:** `this`

___
<a id="registercontrollers"></a>

### `Protected` registerControllers

**registerControllers**(controllers: *`Array`<[AbstractActionController](abstractactioncontroller)>*): `this`

*Defined in [Library/Controller/ControllerManager.ts:56](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllers | `Array`<[AbstractActionController](abstractactioncontroller)> |

**Returns:** `this`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype)*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactories](servicemanager#registerfactories)*

*Defined in [Library/ServiceManager/ServiceManager.ts:64](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| factories | [FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype) |

**Returns:** `this`

___
<a id="registerfactory"></a>

###  registerFactory

**registerFactory**(key: * `Function` &#124; `string`*, value: *[ServiceFactoryType](../interfaces/servicefactorytype)<`Object`>*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactory](servicemanager#registerfactory)*

*Defined in [Library/ServiceManager/ServiceManager.ts:58](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| value | [ServiceFactoryType](../interfaces/servicefactorytype)<`Object`> |

**Returns:** `this`

___
<a id="registerservice"></a>

###  registerService

**registerService**(key: * `Function` &#124; `string`*, service: *`Object`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerService](servicemanager#registerservice)*

*Defined in [Library/ServiceManager/ServiceManager.ts:72](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="getcontrollername"></a>

### `Static` getControllerName

**getControllerName**(controller: *[ControllerType](../modules/controllertypes#controllertype)*): `string`

*Defined in [Library/Controller/ControllerManager.ts:19](https://github.com/SpoonX/stix/blob/573086e/src/Library/Controller/ControllerManager.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controller | [ControllerType](../modules/controllertypes#controllertype) |

**Returns:** `string`

___

