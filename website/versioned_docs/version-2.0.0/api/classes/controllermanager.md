---
title: ControllerManager
id: version-2.0.0-controllermanager
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
* [loadDirectory](controllermanager#loaddirectory)
* [loadFromLocations](controllermanager#loadfromlocations)
* [registerAlias](controllermanager#registeralias)
* [registerAliases](controllermanager#registeraliases)
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

*Defined in [Library/Controller/ControllerManager.ts:10](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L10)*

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

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:80](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L80)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:32](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L32)*

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

*Defined in [Library/Controller/ControllerManager.ts:58](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L58)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:54](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L54)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> |

**Returns:** `boolean`

___
<a id="loaddirectory"></a>

###  loadDirectory

**loadDirectory**(controllerDirectory: *`string`*): `void`

*Defined in [Library/Controller/ControllerManager.ts:33](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllerDirectory | `string` |

**Returns:** `void`

___
<a id="loadfromlocations"></a>

###  loadFromLocations

**loadFromLocations**(controllerDirectories: *`string`[]*): `this`

*Defined in [Library/Controller/ControllerManager.ts:27](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controllerDirectories | `string`[] |

**Returns:** `this`

___
<a id="registeralias"></a>

###  registerAlias

**registerAlias**(alias: *`string`*, to: * `string` &#124; `Function`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAlias](servicemanager#registeralias)*

*Defined in [Library/ServiceManager/ServiceManager.ts:116](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L116)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| alias | `string` |
| to |  `string` &#124; `Function`|

**Returns:** `this`

___
<a id="registeraliases"></a>

###  registerAliases

**registerAliases**(aliases: *[AliasesType](../modules/servicemanagerconfiginterface#aliasestype)*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAliases](servicemanager#registeraliases)*

*Defined in [Library/ServiceManager/ServiceManager.ts:110](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| aliases | [AliasesType](../modules/servicemanagerconfiginterface#aliasestype) |

**Returns:** `this`

___
<a id="registercontroller"></a>

### `Protected` registerController

**registerController**(Controller: *[AbstractActionController](abstractactioncontroller)*): `this`

*Defined in [Library/Controller/ControllerManager.ts:68](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Controller | [AbstractActionController](abstractactioncontroller) |

**Returns:** `this`

___
<a id="registercontrollers"></a>

### `Protected` registerControllers

**registerControllers**(controllers: *`Array`<[AbstractActionController](abstractactioncontroller)>*): `this`

*Defined in [Library/Controller/ControllerManager.ts:62](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L62)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:66](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L66)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:60](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L60)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:74](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L74)*

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

*Defined in [Library/Controller/ControllerManager.ts:19](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/ControllerManager.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| controller | [ControllerType](../modules/controllertypes#controllertype) |

**Returns:** `string`

___

