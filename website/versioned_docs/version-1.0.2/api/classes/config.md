---
title: Config
id: version-1.0.2-config
original_id: config
---

# `Class` Config

## Hierarchy

**Config**

## Index

### Constructors

* [constructor](config#constructor)

### Properties

* [data](config#data)

### Methods

* [all](config#all)
* [merge](config#merge)
* [of](config#of)
* [merge](config#merge-1)
* [mergeMap](config#mergemap)
* [mergeObject](config#mergeobject)
* [patch](config#patch)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Config**(...data: *`Array`<[ConfigData](../interfaces/configdata)>*): [Config](config)

*Defined in [Library/Config/Config.ts:6](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` data | `Array`<[ConfigData](../interfaces/configdata)> |

**Returns:** [Config](config)

___

## Properties

<a id="data"></a>

### `Private` data

**data**: *[ConfigData](../interfaces/configdata)*

*Defined in [Library/Config/Config.ts:6](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L6)*

___

## Methods

<a id="all"></a>

###  all

**all**(): [ConfigData](../interfaces/configdata)

*Defined in [Library/Config/Config.ts:16](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L16)*

**Returns:** [ConfigData](../interfaces/configdata)

___
<a id="merge"></a>

###  merge

**merge**(...toMerge: *`Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)>*): `void`

*Defined in [Library/Config/Config.ts:20](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |

**Returns:** `void`

___
<a id="of"></a>

###  of

**of**<`T`>(section: *`string`*): `T`

*Defined in [Library/Config/Config.ts:12](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L12)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| section | `string` |

**Returns:** `T`

___
<a id="merge-1"></a>

### `Static` merge

**merge**(...toMerge: *`Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)>*): `void`

*Defined in [Library/Config/Config.ts:24](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |

**Returns:** `void`

___
<a id="mergemap"></a>

### `Static` mergeMap

**mergeMap**(target: *`Map`<`any`, `any`>*, other: *`Map`<`any`, `any`>*): `Map`<`any`, `any`>

*Defined in [Library/Config/Config.ts:40](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Map`<`any`, `any`> |
| other | `Map`<`any`, `any`> |

**Returns:** `Map`<`any`, `any`>

___
<a id="mergeobject"></a>

### `Static` mergeObject

**mergeObject**(target: *[ConfigData](../interfaces/configdata)*, other: *[ConfigData](../interfaces/configdata)*): [ConfigData](../interfaces/configdata)

*Defined in [Library/Config/Config.ts:30](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [ConfigData](../interfaces/configdata) |
| other | [ConfigData](../interfaces/configdata) |

**Returns:** [ConfigData](../interfaces/configdata)

___
<a id="patch"></a>

### `Static` patch

**patch**(base: *`any`*, value: *`any`*): `any`

*Defined in [Library/Config/Config.ts:48](https://github.com/SpoonX/stix/blob/8c44541/src/Library/Config/Config.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `any` |
| value | `any` |

**Returns:** `any`

___

