---
title: AbstractFileBasedPluginManager
id: version-4.1.7-abstractfilebasedpluginmanager
original_id: abstractfilebasedpluginmanager
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

**new AbstractFileBasedPluginManager**(creationContext: *[ServiceManager](servicemanager)*, locations: *`string`[]*, config: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager)

*Overrides [AbstractPluginManager](abstractpluginmanager).[constructor](abstractpluginmanager#constructor)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:7](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| locations | `string`[] |
| config | [ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype) |

**Returns:** [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Inherited from [AbstractPluginManager](abstractpluginmanager).[creationContext](abstractpluginmanager#creationcontext)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:85](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L85)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:34](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L34)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="getplugin"></a>

###  getPlugin

**getPlugin**(plugin: *[Instantiable](../modules/types#instantiable)<`Object`>*): `Object`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:57](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | [Instantiable](../modules/types#instantiable)<`Object`> |

**Returns:** `Object`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`T`>*): `boolean`

*Inherited from [ServiceManager](servicemanager).[has](servicemanager#has)*

*Defined in [Library/ServiceManager/ServiceManager.ts:59](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L59)*

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

**loadDirectory**(pluginDirectory: *`string`*): `void`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:32](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pluginDirectory | `string` |

**Returns:** `void`

___
<a id="loadfromlocations"></a>

###  loadFromLocations

**loadFromLocations**(pluginDirectories?: *`string`[]*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:24](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L24)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:125](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L125)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:119](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| aliases | [AliasesType](../modules/servicemanagerconfiginterface#aliasestype) |

**Returns:** `this`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType](../modules/servicemanagerconfiginterface#factoriesmaptype)*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactories](servicemanager#registerfactories)*

*Defined in [Library/ServiceManager/ServiceManager.ts:71](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L71)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:65](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| value | [ServiceFactoryType](../interfaces/servicefactorytype)<`Object`> |

**Returns:** `this`

___
<a id="registerinvokable"></a>

###  registerInvokable

**registerInvokable**(key: *[ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`Object`>*, value: *[Instantiable](../modules/types#instantiable)<`Object`>*): `void`

*Inherited from [ServiceManager](servicemanager).[registerInvokable](servicemanager#registerinvokable)*

*Defined in [Library/ServiceManager/ServiceManager.ts:115](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | [ServiceKeyType](../modules/servicemanagerconfiginterface#servicekeytype)<`Object`> |
| value | [Instantiable](../modules/types#instantiable)<`Object`> |

**Returns:** `void`

___
<a id="registerplugin"></a>

### `Protected` registerPlugin

**registerPlugin**(Plugin: *[Instantiable](../modules/types#instantiable)<`Object`>*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:67](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Plugin | [Instantiable](../modules/types#instantiable)<`Object`> |

**Returns:** `this`

___
<a id="registerplugins"></a>

### `Protected` registerPlugins

**registerPlugins**(plugins: *`Array`<[Instantiable](../modules/types#instantiable)<`Object`>>*): `this`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:61](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugins | `Array`<[Instantiable](../modules/types#instantiable)<`Object`>> |

**Returns:** `this`

___
<a id="registerservice"></a>

###  registerService

**registerService**(key: * `Function` &#124; `string`*, service: *`Object`*): `this`

*Inherited from [ServiceManager](servicemanager).[registerService](servicemanager#registerservice)*

*Defined in [Library/ServiceManager/ServiceManager.ts:79](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/ServiceManager.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="getpluginname"></a>

### `Static` getPluginName

**getPluginName**(plugin: *[FileBasedPluginType](../modules/filebasedplugintype#filebasedplugintype)*): `string`

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:16](https://github.com/SpoonX/stix/blob/6e28786/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | [FileBasedPluginType](../modules/filebasedplugintype#filebasedplugintype) |

**Returns:** `string`

___

