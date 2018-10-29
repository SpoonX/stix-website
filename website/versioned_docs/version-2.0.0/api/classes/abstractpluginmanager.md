---
title: AbstractPluginManager
id: version-2.0.0-abstractpluginmanager
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
* [registerService](abstractpluginmanager#registerservice)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new AbstractPluginManager**(creationContext: *[ServiceManager](servicemanager)*, config?: *[ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype)*): [AbstractPluginManager](abstractpluginmanager)

*Overrides [ServiceManager](servicemanager).[constructor](servicemanager#constructor)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| `Optional` config | [ServiceManagerConfigType](../modules/servicemanagerconfiginterface#servicemanagerconfigtype) |

**Returns:** [AbstractPluginManager](abstractpluginmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

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

