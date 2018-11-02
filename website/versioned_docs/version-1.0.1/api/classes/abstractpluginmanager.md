---
title: AbstractPluginManager
id: version-1.0.1-abstractpluginmanager
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
* [registerFactories](abstractpluginmanager#registerfactories)
* [registerFactory](abstractpluginmanager#registerfactory)
* [registerService](abstractpluginmanager#registerservice)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new AbstractPluginManager**(creationContext: *[ServiceManager](servicemanager)*, config?: *[ServiceManagerConfigType]()*): [AbstractPluginManager](abstractpluginmanager)

*Overrides [ServiceManager](servicemanager).[constructor](servicemanager#constructor)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| creationContext | [ServiceManager](servicemanager) |
| `Optional` config | [ServiceManagerConfigType]() |

**Returns:** [AbstractPluginManager](abstractpluginmanager)

___

## Properties

<a id="creationcontext"></a>

### `Protected` creationContext

**creationContext**: *[ServiceManager](servicemanager)*

*Overrides [ServiceManager](servicemanager).[creationContext](servicemanager#creationcontext)*

*Defined in [Library/ServiceManager/AbstractPluginManager.ts:5](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/AbstractPluginManager.ts#L5)*

___

## Methods

<a id="configure"></a>

###  configure

**configure**(config: *[ServiceManagerConfigType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[configure](servicemanager#configure)*

*Defined in [Library/ServiceManager/ServiceManager.ts:78](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L78)*

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

*Defined in [Library/ServiceManager/ServiceManager.ts:31](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L31)*

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

*Inherited from [ServiceManager](servicemanager).[has](servicemanager#has)*

*Defined in [Library/ServiceManager/ServiceManager.ts:52](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L52)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [ServiceKeyType]()<`T`> |

**Returns:** `boolean`

___
<a id="registerfactories"></a>

###  registerFactories

**registerFactories**(factories: *[FactoriesMapType]()*): `this`

*Inherited from [ServiceManager](servicemanager).[registerFactories](servicemanager#registerfactories)*

*Defined in [Library/ServiceManager/ServiceManager.ts:64](https://github.com/SpoonX/stix/blob/573086e/src/Library/ServiceManager/ServiceManager.ts#L64)*

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

