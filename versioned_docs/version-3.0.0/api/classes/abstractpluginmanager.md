---
title: AbstractPluginManager
id: version-3.0.0-abstractpluginmanager
original_id: abstractpluginmanager
---

# `Class` AbstractPluginManager

## Hierarchy

 [ServiceManager](servicemanager)

**↳ AbstractPluginManager**

↳  [ControllerManager](controllermanager)

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](abstractpluginmanager#constructor)

### Properties

* [creationContext](abstractpluginmanager#creationcontext)

### Methods

* [configure](abstractpluginmanager#configure)
* [get](abstractpluginmanager#get)
* [has](abstractpluginmanager#has)
* [registerAlias](abstractpluginmanager#registeralias)
* [registerAliases](abstractpluginmanager#registeraliases)
* [registerFactories](abstractpluginmanager#registerfactories)
* [registerFactory](abstractpluginmanager#registerfactory)
* [registerInvokable](abstractpluginmanager#registerinvokable)
* [registerService](abstractpluginmanager#registerservice)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new AbstractPluginManager**(creationContext: *[ServiceManager](servicemanager)*, config?: *[ServiceManagerConfigType](../#servicemanagerconfigtype)*): [AbstractPluginManager](abstractpluginmanager)

*Overrides [ServiceManager](servicemanager).[constructor](servicemanager#constructor)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| `Optional` config | [ServiceManagerConfigType](../#servicemanagerconfigtype) |

**Returns:** [AbstractPluginManager](abstractpluginmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

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

