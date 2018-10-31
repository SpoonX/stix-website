---
title: CommandManager
id: version-4.1.0-commandmanager
original_id: commandmanager
---

# `Class` CommandManager

## Hierarchy

↳  [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager)

**↳ CommandManager**

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](commandmanager#constructor)

### Properties

* [creationContext](commandmanager#creationcontext)

### Methods

* [configure](commandmanager#configure)
* [get](commandmanager#get)
* [getCommand](commandmanager#getcommand)
* [getPlugin](commandmanager#getplugin)
* [has](commandmanager#has)
* [loadDirectory](commandmanager#loaddirectory)
* [loadFromLocations](commandmanager#loadfromlocations)
* [registerAlias](commandmanager#registeralias)
* [registerAliases](commandmanager#registeraliases)
* [registerFactories](commandmanager#registerfactories)
* [registerFactory](commandmanager#registerfactory)
* [registerInvokable](commandmanager#registerinvokable)
* [registerPlugin](commandmanager#registerplugin)
* [registerPlugins](commandmanager#registerplugins)
* [registerService](commandmanager#registerservice)
* [getPluginName](commandmanager#getpluginname)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new CommandManager**(creationContext: *[ServiceManager](servicemanager)*, config: *[CommandManagerConfigType]()*): [CommandManager](commandmanager)

*Overrides [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[constructor](abstractfilebasedpluginmanager#constructor)*

*Defined in [Library/Command/CommandManager.ts:7](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Command/CommandManager.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| config | [CommandManagerConfigType]() |

**Returns:** [CommandManager](commandmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Inherited from [AbstractPluginManager](abstractpluginmanager).[creationContext](abstractpluginmanager#creationcontext)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:85](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L85)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:34](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L34)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType]()<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="getcommand"></a>

###  getCommand

**getCommand**(Command: *[AbstractCommand](abstractcommand)*): `Object`

*Defined in [Library/Command/CommandManager.ts:12](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Command/CommandManager.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Command | [AbstractCommand](abstractcommand) |

**Returns:** `Object`

___
<a id="getplugin"></a>

###  getPlugin

**getPlugin**(plugin: *[Instantiable]()<`Object`>*): `Object`

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[getPlugin](abstractfilebasedpluginmanager#getplugin)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:57](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L57)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:59](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L59)*

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

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[loadDirectory](abstractfilebasedpluginmanager#loaddirectory)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:32](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pluginDirectory | `string` |

**Returns:** `void`

___
<a id="loadfromlocations"></a>

###  loadFromLocations

**loadFromLocations**(pluginDirectories?: *`string`[]*): `this`

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[loadFromLocations](abstractfilebasedpluginmanager#loadfromlocations)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:24](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L24)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:125](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L125)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:119](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L119)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:71](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L71)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:65](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L65)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:115](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L115)*

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

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[registerPlugin](abstractfilebasedpluginmanager#registerplugin)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:67](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Plugin | [Instantiable]()<`Object`> |

**Returns:** `this`

___
<a id="registerplugins"></a>

### `Protected` registerPlugins

**registerPlugins**(plugins: *`Array`<[Instantiable]()<`Object`>>*): `this`

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[registerPlugins](abstractfilebasedpluginmanager#registerplugins)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:61](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L61)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:79](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/ServiceManager.ts#L79)*

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

*Inherited from [AbstractFileBasedPluginManager](abstractfilebasedpluginmanager).[getPluginName](abstractfilebasedpluginmanager#getpluginname)*

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:16](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| plugin | [FileBasedPluginType]() |

**Returns:** `string`

___

