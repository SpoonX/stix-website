---
title: AbstractFileBasedPluginManager
---

# `Class` AbstractFileBasedPluginManager

## Hierarchy

↳  [AbstractPluginManager](abstractpluginmanager)

**↳ AbstractFileBasedPluginManager**

↳  [ControllerManager](controllermanager)

↳  [CommandManager](commandmanager)

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](abstractfilebasedpluginmanager#constructor)

### Properties

* [creationContext](abstractfilebasedpluginmanager#creationcontext)

### Methods

* [configure](abstractfilebasedpluginmanager#configure)
* [get](abstractfilebasedpluginmanager#get)
* [getPlugin](abstractfilebasedpluginmanager#getplugin)
* [has](abstractfilebasedpluginmanager#has)
* [loadDirectory](abstractfilebasedpluginmanager#loaddirectory)
* [loadFromLocations](abstractfilebasedpluginmanager#loadfromlocations)
* [registerAlias](abstractfilebasedpluginmanager#registeralias)
* [registerAliases](abstractfilebasedpluginmanager#registeraliases)
* [registerFactories](abstractfilebasedpluginmanager#registerfactories)
* [registerFactory](abstractfilebasedpluginmanager#registerfactory)
* [registerInvokable](abstractfilebasedpluginmanager#registerinvokable)
* [registerPlugin](abstractfilebasedpluginmanager#registerplugin)
* [registerPlugins](abstractfilebasedpluginmanager#registerplugins)
* [registerService](abstractfilebasedpluginmanager#registerservice)
* [getPluginName](abstractfilebasedpluginmanager#getpluginname)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new AbstractFileBasedPluginManager**(creationContext: *[ServiceManager](servicemanager)*, locations: *`string`[]*, config: *[ServiceManagerConfigType]()*): [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager)

*Overrides [AbstractPluginManager](abstractpluginmanager).[constructor](abstractpluginmanager#constructor)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:10](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| locations | `string`[] |
| config | [ServiceManagerConfigType]() |

**Returns:** [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Inherited from [AbstractPluginManager](abstractpluginmanager).[creationContext](abstractpluginmanager#creationcontext)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:85](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ServiceManagerConfigType]() |

**Returns:** `this`

___
<a id="get"></a>

###  get

**get**<`T`>(Service: *[ServiceKeyType]()<`T`>*, forceTransient?: *`boolean`*): `T`

*Inherited from [ServiceManager](servicemanager).[get](servicemanager#get)*

*Defined in [Library/ServiceManager/ServiceManager.ts:34](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L34)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType]()<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="getplugin"></a>

###  getPlugin

**getPlugin**(plugin: *[Instantiable]()<`Object`>*): `Object`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:78](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | [Instantiable]()<`Object`> |

**Returns:** `Object`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType]()<`T`>*): `boolean`

*Inherited from [ServiceManager](servicemanager).[has](servicemanager#has)*

*Defined in [Library/ServiceManager/ServiceManager.ts:59](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L59)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType]()<`T`> |

**Returns:** `boolean`

___
<a id="loaddirectory"></a>

###  loadDirectory

**loadDirectory**(pluginDirectory: *`string`*): `void`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:35](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pluginDirectory | `string` |

**Returns:** `void`

___
<a id="loadfromlocations"></a>

###  loadFromLocations

**loadFromLocations**(pluginDirectories?: *`string`[]*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:27](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` pluginDirectories | `string`[] |

**Returns:** `this`

___
<a id="registeralias"></a>

###  registerAlias

**registerAlias**(alias: *`string`*, to: * `string` &#124; `Function`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAlias](servicemanager#registeralias)*

*Defined in [Library/ServiceManager/ServiceManager.ts:125](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L125)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| alias | `string` |
| to |  `string` &#124; `Function`|

**Returns:** `this`

___
<a id="registeraliases"></a>

###  registerAliases

**registerAliases**(aliases: *[AliasesType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[registerAliases](servicemanager#registeraliases)*

*Defined in [Library/ServiceManager/ServiceManager.ts:119](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| aliases | [AliasesType]() |

**Returns:** `this`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactories](servicemanager#registerfactories)*

*Defined in [Library/ServiceManager/ServiceManager.ts:71](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| factories | [FactoriesMapType]() |

**Returns:** `this`

___
<a id="registerfactory"></a>

###  registerFactory

**registerFactory**(key: * `Function` &#124; `string`*, value: *[ServiceFactoryType](../interfaces/servicefactorytype)<`Object`>*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactory](servicemanager#registerfactory)*

*Defined in [Library/ServiceManager/ServiceManager.ts:65](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| value | [ServiceFactoryType](../interfaces/servicefactorytype)<`Object`> |

**Returns:** `this`

___
<a id="registerinvokable"></a>

###  registerInvokable

**registerInvokable**(key: *[ServiceKeyType]()<`Object`>*, value: *[Instantiable]()<`Object`>*): `void`

*Inherited from [ServiceManager](servicemanager).[registerInvokable](servicemanager#registerinvokable)*

*Defined in [Library/ServiceManager/ServiceManager.ts:115](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | [ServiceKeyType]()<`Object`> |
| value | [Instantiable]()<`Object`> |

**Returns:** `void`

___
<a id="registerplugin"></a>

### `Protected` registerPlugin

**registerPlugin**(Plugin: *[Instantiable]()<`Object`>*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:88](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L88)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Plugin | [Instantiable]()<`Object`> |

**Returns:** `this`

___
<a id="registerplugins"></a>

### `Protected` registerPlugins

**registerPlugins**(plugins: *`Array`<[Instantiable]()<`Object`>>*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:82](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugins | `Array`<[Instantiable]()<`Object`>> |

**Returns:** `this`

___
<a id="registerservice"></a>

###  registerService

**registerService**(key: * `Function` &#124; `string`*, service: *`Object`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerService](servicemanager#registerservice)*

*Defined in [Library/ServiceManager/ServiceManager.ts:79](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManager.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="getpluginname"></a>

### `Static` getPluginName

**getPluginName**(plugin: *[FileBasedPluginType]()*): `string`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:19](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | [FileBasedPluginType]() |

**Returns:** `string`

___

