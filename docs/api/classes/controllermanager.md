---
title: ControllerManager
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
* [loadDirectory](controllermanager#loaddirectory)
* [loadFromLocations](controllermanager#loadfromlocations)
* [registerAlias](controllermanager#registeralias)
* [registerAliases](controllermanager#registeraliases)
* [registerController](controllermanager#registercontroller)
* [registerControllers](controllermanager#registercontrollers)
* [registerFactories](controllermanager#registerfactories)
* [registerFactory](controllermanager#registerfactory)
* [registerInvokable](controllermanager#registerinvokable)
* [registerService](controllermanager#registerservice)
* [getControllerName](controllermanager#getcontrollername)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ControllerManager**(creationContext: *[ServiceManager](servicemanager)*, config: *[ControllerManagerConfigType](../#controllermanagerconfigtype)*): [ControllerManager](controllermanager)

*Overrides [AbstractPluginManager](abstractpluginmanager).[constructor](abstractpluginmanager#constructor)*

*Defined in [Library/Controller/ControllerManager.ts:8](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| config | [ControllerManagerConfigType](../#controllermanagerconfigtype) |

**Returns:** [ControllerManager](controllermanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Inherited from [AbstractPluginManager](abstractpluginmanager).[creationContext](abstractpluginmanager#creationcontext)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../#servicemanagerconfigtype)*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:85](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| config | [ServiceManagerConfigType](../#servicemanagerconfigtype) |

**Returns:** `this`

___
<a id="get"></a>

###  get

**get**<`T`>(Service: *[ServiceKeyType](../#servicekeytype)<`T`>*, forceTransient?: *`boolean`*): `T`

*Inherited from [ServiceManager](servicemanager).[get](servicemanager#get)*

*Defined in [Library/ServiceManager/ServiceManager.ts:34](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L34)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType](../#servicekeytype)<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="getcontroller"></a>

###  getController

**getController**(controller: *[ControllerType](../#controllertype)*): `Object`

*Defined in [Library/Controller/ControllerManager.ts:56](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L56)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| controller | [ControllerType](../#controllertype) |

**Returns:** `Object`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType](../#servicekeytype)<`T`>*): `boolean`

*Inherited from [ServiceManager](servicemanager).[has](servicemanager#has)*

*Defined in [Library/ServiceManager/ServiceManager.ts:59](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L59)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Service | [ServiceKeyType](../#servicekeytype)<`T`> |

**Returns:** `boolean`

___
<a id="loaddirectory"></a>

###  loadDirectory

**loadDirectory**(controllerDirectory: *`string`*): `void`

*Defined in [Library/Controller/ControllerManager.ts:31](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| controllerDirectory | `string` |

**Returns:** `void`

___
<a id="loadfromlocations"></a>

###  loadFromLocations

**loadFromLocations**(controllerDirectories: *`string`[]*): `this`

*Defined in [Library/Controller/ControllerManager.ts:25](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| controllerDirectories | `string`[] |

**Returns:** `this`

___
<a id="registeralias"></a>

###  registerAlias

**registerAlias**(alias: *`string`*, to: * `string` &#124; `Function`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAlias](servicemanager#registeralias)*

*Defined in [Library/ServiceManager/ServiceManager.ts:125](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| alias | `string` |
| to |  `string` &#124; `Function`|

**Returns:** `this`

___
<a id="registeraliases"></a>

###  registerAliases

**registerAliases**(aliases: *[AliasesType](../#aliasestype)*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAliases](servicemanager#registeraliases)*

*Defined in [Library/ServiceManager/ServiceManager.ts:119](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| aliases | [AliasesType](../#aliasestype) |

**Returns:** `this`

___
<a id="registercontroller"></a>

### `Protected` registerController

**registerController**(Controller: *[AbstractActionController](abstractactioncontroller)*): `this`

*Defined in [Library/Controller/ControllerManager.ts:66](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Controller | [AbstractActionController](abstractactioncontroller) |

**Returns:** `this`

___
<a id="registercontrollers"></a>

### `Protected` registerControllers

**registerControllers**(controllers: *`Array`<[AbstractActionController](abstractactioncontroller)>*): `this`

*Defined in [Library/Controller/ControllerManager.ts:60](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| controllers | `Array`<[AbstractActionController](abstractactioncontroller)> |

**Returns:** `this`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType](../#factoriesmaptype)*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactories](servicemanager#registerfactories)*

*Defined in [Library/ServiceManager/ServiceManager.ts:71](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| factories | [FactoriesMapType](../#factoriesmaptype) |

**Returns:** `this`

___
<a id="registerfactory"></a>

###  registerFactory

**registerFactory**(key: * `Function` &#124; `string`*, value: *[ServiceFactoryType](../interfaces/servicefactorytype)<`Object`>*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactory](servicemanager#registerfactory)*

*Defined in [Library/ServiceManager/ServiceManager.ts:65](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| value | [ServiceFactoryType](../interfaces/servicefactorytype)<`Object`> |

**Returns:** `this`

___
<a id="registerinvokable"></a>

###  registerInvokable

**registerInvokable**(key: *[ServiceKeyType](../#servicekeytype)<`Object`>*, value: *[Instantiable](../#instantiable)<`Object`>*): `void`

*Inherited from [ServiceManager](servicemanager).[registerInvokable](servicemanager#registerinvokable)*

*Defined in [Library/ServiceManager/ServiceManager.ts:115](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | [ServiceKeyType](../#servicekeytype)<`Object`> |
| value | [Instantiable](../#instantiable)<`Object`> |

**Returns:** `void`

___
<a id="registerservice"></a>

###  registerService

**registerService**(key: * `Function` &#124; `string`*, service: *`Object`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerService](servicemanager#registerservice)*

*Defined in [Library/ServiceManager/ServiceManager.ts:79](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="getcontrollername"></a>

### `Static` getControllerName

**getControllerName**(controller: *[ControllerType](../#controllertype)*): `string`

*Defined in [Library/Controller/ControllerManager.ts:17](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManager.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| controller | [ControllerType](../#controllertype) |

**Returns:** `string`

___

