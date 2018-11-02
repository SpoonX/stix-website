---
title: ServiceManager
id: version-2.0.0-servicemanager
original_id: servicemanager
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
* [registerService](servicemanager#registerservice)
* [resolveName](servicemanager#resolvename)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServiceManager**(config?: *[ServiceManagerConfigType]()*): [ServiceManager](servicemanager)

*Defined in [Library/ServiceManager/ServiceManager.ts:22](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` config | [ServiceManagerConfigType]() |

**Returns:** [ServiceManager](servicemanager)

___

## Properties

<a id="aliases"></a>

### `Private` aliases

**aliases**: *[AliasesType]()*

*Defined in [Library/ServiceManager/ServiceManager.ts:16](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L16)*

___
<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Defined in [Library/ServiceManager/ServiceManager.ts:22](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L22)*

___
<a id="factories"></a>

### `Private` factories

**factories**: *[FactoriesMapType]()* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:14](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L14)*

___
<a id="services"></a>

### `Private` services

**services**: *[ServicesMapType]()* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:12](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L12)*

___
<a id="shared"></a>

### `Private` shared

**shared**: *[SharedMapType]()* =  new Map()

*Defined in [Library/ServiceManager/ServiceManager.ts:18](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L18)*

___
<a id="sharedbydefault"></a>

### `Private` sharedByDefault

**sharedByDefault**: *`boolean`* = true

*Defined in [Library/ServiceManager/ServiceManager.ts:20](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L20)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType]()*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:80](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ServiceManagerConfigType]() |

**Returns:** `this`

___
<a id="get"></a>

###  get

**get**<`T`>(Service: *[ServiceKeyType]()<`T`>*, forceTransient?: *`boolean`*): `T`

*Defined in [Library/ServiceManager/ServiceManager.ts:32](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L32)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Service | [ServiceKeyType]()<`T`> | - |
| `Default value` forceTransient | `boolean` | false |

**Returns:** `T`

___
<a id="has"></a>

###  has

**has**<`T`>(Service: *[ServiceKeyType]()<`T`>*): `boolean`

*Defined in [Library/ServiceManager/ServiceManager.ts:54](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L54)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType]()<`T`> |

**Returns:** `boolean`

___
<a id="registeralias"></a>

###  registerAlias

**registerAlias**(alias: *`string`*, to: * `string` &#124; `Function`*): `this`

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

**registerAliases**(aliases: *[AliasesType]()*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:110](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| aliases | [AliasesType]() |

**Returns:** `this`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType]()*): `this`

*Defined in [Library/ServiceManager/ServiceManager.ts:66](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| factories | [FactoriesMapType]() |

**Returns:** `this`

___
<a id="registerfactory"></a>

###  registerFactory

**registerFactory**(key: * `Function` &#124; `string`*, value: *[ServiceFactoryType](../interfaces/servicefactorytype)<`Object`>*): `this`

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

*Defined in [Library/ServiceManager/ServiceManager.ts:74](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Function` &#124; `string`|
| service | `Object` |

**Returns:** `this`

___
<a id="resolvename"></a>

### `Private` resolveName

**resolveName**<`T`>(name: *[ServiceKeyType]()<`T`>*): [ServiceKeyType]()<`T`>

*Defined in [Library/ServiceManager/ServiceManager.ts:122](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/ServiceManager.ts#L122)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | [ServiceKeyType]()<`T`> |

**Returns:** [ServiceKeyType]()<`T`>

___

