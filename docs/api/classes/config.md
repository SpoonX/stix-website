---
title: Config
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

*Defined in [Library/Config/Config.ts:4](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L4)*

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

*Defined in [Library/Config/Config.ts:4](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L4)*

___

## Methods

<a id="all"></a>

###  all

**all**(): [ConfigData](../interfaces/configdata)

*Defined in [Library/Config/Config.ts:14](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L14)*

**Returns:** [ConfigData](../interfaces/configdata)

___
<a id="merge"></a>

###  merge

**merge**(...toMerge: *`Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)>*): `void`

*Defined in [Library/Config/Config.ts:18](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |

**Returns:** `void`

___
<a id="of"></a>

###  of

**of**<`T`>(section: *`string`*): `T`

*Defined in [Library/Config/Config.ts:10](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L10)*

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

*Defined in [Library/Config/Config.ts:22](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |

**Returns:** `void`

___
<a id="mergemap"></a>

### `Static` mergeMap

**mergeMap**(target: *`Map`<`any`, `any`>*, other: *`Map`<`any`, `any`>*): `Map`<`any`, `any`>

*Defined in [Library/Config/Config.ts:38](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L38)*

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

*Defined in [Library/Config/Config.ts:28](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L28)*

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

*Defined in [Library/Config/Config.ts:46](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Config/Config.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `any` |
| value | `any` |

**Returns:** `any`

___

