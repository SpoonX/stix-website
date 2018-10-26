---
title: ServiceManager
---

# `Class` ServiceManager

*__export__*: 

*__class__*: ServiceManager

*__implements__*: {ServiceManagerInterface}

## Hierarchy

**ServiceManager**

↳  [AbstractPluginManager](abstractpluginmanager)

## Implements

* [ServiceManagerInterface](../interfaces/servicemanagerinterface)

## Index

### Constructors

* [constructor](servicemanager#constructor)

### Properties

* [aliases](servicemanager#aliases)
* [creationContext](servicemanager#creationcontext)
* [factories](servicemanager#factories)
* [services](servicemanager#services)
* [shared](servicemanager#shared)
* [sharedByDefault](servicemanager#sharedbydefault)

### Methods

* [configure](servicemanager#configure)
* [get](servicemanager#get)
* [has](servicemanager#has)
* [registerAlias](servicemanager#registeralias)
* [registerAliases](servicemanager#registeraliases)
* [registerFactories](servicemanager#registerfactories)
* [registerFactory](servicemanager#registerfactory)
* [registerInvokable](servicemanager#registerinvokable)
* [registerService](servicemanager#registerservice)
* [resolveName](servicemanager#resolvename)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServiceManager**(config?: *[ServiceManagerConfigType](../#servicemanagerconfigtype)*): [ServiceManager](servicemanager)

*Defined in [Library/ServiceManager/ServiceManager.ts:24](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` config | [ServiceManagerConfigType](../#servicemanagerconfigtype) |

**Returns:** [ServiceManager](servicemanager)

___

## Properties

<a id="aliases"></a>

### `Private` aliases

**aliases**: *[AliasesType](../#aliasestype)*

*Defined in [Library/ServiceManager/ServiceManager.ts:18](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L18)*

___
<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Defined in [Library/ServiceManager/ServiceManager.ts:24](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L24)*

___
<a id="factories"></a>

### `Private` factories

**factories**: *[FactoriesMapType](../#factoriesmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:16](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L16)*

___
<a id="services"></a>

### `Private` services

**services**: *[ServicesMapType](../#servicesmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:14](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L14)*

___
<a id="shared"></a>

### `Private` shared

**shared**: *[SharedMapType](../#sharedmaptype)* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:20](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L20)*

___
<a id="sharedbydefault"></a>

### `Private` sharedByDefault

**sharedByDefault**: *`boolean`* = true

*Defined in [Library/ServiceManager/ServiceManager.ts:22](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L22)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType](../#servicemanagerconfigtype)*): `this`

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

*Defined in [Library/ServiceManager/ServiceManager.ts:79](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="resolvename"></a>

### `Private` resolveName

**resolveName**<`T`>(name: *[ServiceKeyType](../#servicekeytype)<`T`>*): [ServiceKeyType](../#servicekeytype)<`T`>

*Defined in [Library/ServiceManager/ServiceManager.ts:131](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManager.ts#L131)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| name | [ServiceKeyType](../#servicekeytype)<`T`> |

**Returns:** [ServiceKeyType](../#servicekeytype)<`T`>

___

