---
title: Config
id: version-3.0.0-config
original_id: config
---

# `Class` Config

The Config class is responsible for managing the configuration of the entire application. Stix default configuration can be overriden by modules and by you. In other hand, you can override the configuration of both modules and Stix itself. **You total control over the configuration of stix and other installed modules.**

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

*Defined in [Library/Config/Config.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L15)*

Merges any config passed to the constructor. Modules can override the stix's configuration and you can override them both.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` data | `Array`<[ConfigData](../interfaces/configdata)> |   |

**Returns:** [Config](config)

___

## Properties

<a id="data"></a>

### `Private` data

**data**: *[ConfigData](../interfaces/configdata)*

*Defined in [Library/Config/Config.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L15)*

*__type__*: ConfigData

___

## Methods

<a id="all"></a>

###  all

**all**(): [ConfigData](../interfaces/configdata)

*Defined in [Library/Config/Config.ts:44](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L44)*

Gets the merged config for the entire application.

**Returns:** [ConfigData](../interfaces/configdata)

___
<a id="merge"></a>

###  merge

**merge**(...toMerge: *`Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)>*): `void`

*Defined in [Library/Config/Config.ts:53](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L53)*

Merges any config passed as arguments to the already registered configuration.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |   |

**Returns:** `void`

___
<a id="of"></a>

###  of

**of**<`T`>(section: *`string`*): `T`

*Defined in [Library/Config/Config.ts:35](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L35)*

Gets the config of given section name. Example: 'router'.
*__template__*: T

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| section | `string` |  - |

**Returns:** `T`

___
<a id="merge-1"></a>

### `Static` merge

**merge**(...toMerge: *`Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)>*): `void`

*Defined in [Library/Config/Config.ts:62](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L62)*

Static method that merges all config that was given to it.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` toMerge | `Array`< `Map`<`any`, `any`> &#124; [ConfigData](../interfaces/configdata)> |   |

**Returns:** `void`

___
<a id="mergemap"></a>

### `Static` mergeMap

**mergeMap**(target: *`Map`<`any`, `any`>*, other: *`Map`<`any`, `any`>*): `Map`<`any`, `any`>

*Defined in [Library/Config/Config.ts:91](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L91)*

Static method that specifically merges instances of Map.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | `Map`<`any`, `any`> |  - |
| other | `Map`<`any`, `any`> |  - |

**Returns:** `Map`<`any`, `any`>

___
<a id="mergeobject"></a>

### `Static` mergeObject

**mergeObject**(target: *[ConfigData](../interfaces/configdata)*, other: *[ConfigData](../interfaces/configdata)*): [ConfigData](../interfaces/configdata)

*Defined in [Library/Config/Config.ts:74](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L74)*

Static method that merges config that are objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | [ConfigData](../interfaces/configdata) |  - |
| other | [ConfigData](../interfaces/configdata) |  - |

**Returns:** [ConfigData](../interfaces/configdata)

___
<a id="patch"></a>

### `Static` patch

**patch**(base: *`any`*, value: *`any`*): `any`

*Defined in [Library/Config/Config.ts:107](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/Config.ts#L107)*

Static method that merges two configs, a base and a value, that are either arrays, objects or maps. If the types don't match, it returns the value without merging.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| base | `any` |  - |
| value | `any` |  - |

**Returns:** `any`

___

