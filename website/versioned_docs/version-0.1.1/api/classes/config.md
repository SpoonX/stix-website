---
title: Config
id: version-0.1.1-config
original_id: config
---

# `Class` Config

## Hierarchy

 `Homefront`

**↳ Config**

## Index

### Constructors

* [constructor](config#constructor)

### Properties

* [MODE_FLAT](config#mode_flat)
* [MODE_NESTED](config#mode_nested)

### Methods

* [all](config#all)
* [applyDefaults](config#applydefaults)
* [expand](config#expand)
* [fetch](config#fetch)
* [fetchOrPut](config#fetchorput)
* [flatten](config#flatten)
* [getData](config#getdata)
* [getMode](config#getmode)
* [isModeFlat](config#ismodeflat)
* [isModeNested](config#ismodenested)
* [merge](config#merge)
* [of](config#of)
* [put](config#put)
* [remove](config#remove)
* [search](config#search)
* [setMode](config#setmode)
* [merge](config#merge-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Config**(data?: *`__type`*, mode?: *`string`*): [Config](config)

*Inherited from Homefront.__constructor*

**

Constructs a new instance of Homefront.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `__type` |
| `Optional` mode | `string` |

**Returns:** [Config](config)

___

## Properties

<a id="mode_flat"></a>

### `Static` MODE_FLAT

**MODE_FLAT**: *`string`*

*Inherited from Homefront.MODE_FLAT*

**

*__returns__*: 

___
<a id="mode_nested"></a>

### `Static` MODE_NESTED

**MODE_NESTED**: *`string`*

*Inherited from Homefront.MODE_NESTED*

**

*__returns__*: 

___

## Methods

<a id="all"></a>

###  all

**all**(): [ConfigInterface](../interfaces/configinterface)

*Defined in [Library/Config/Config.ts:5](https://github.com/SpoonX/stix/blob/f075739/src/Library/Config/Config.ts#L5)*

**Returns:** [ConfigInterface](../interfaces/configinterface)

___
<a id="applydefaults"></a>

###  applyDefaults

**applyDefaults**(key?: *`string`*, defaults?: *`any`*): `any`

*Inherited from Homefront.applyDefaults*

**

Method allowing you to set missing keys (backwards-applied defaults) nested.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` key | `string` |  \- |
| `Optional` defaults | `any` |   |

**Returns:** `any`

___
<a id="expand"></a>

###  expand

**expand**(source?: *`__type`*): `__type`

*Inherited from Homefront.expand*

**

Expands flat object to nested object.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` source | `__type` |

**Returns:** `__type`

___
<a id="fetch"></a>

###  fetch

**fetch**(key?: *`string`*, defaultValue?: *`any`*): `any`

*Inherited from Homefront.fetch*

**

Fetches value of given key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` key | `string` |  \- |
| `Optional` defaultValue | `any` |

**Returns:** `any`

___
<a id="fetchorput"></a>

###  fetchOrPut

**fetchOrPut**(key: *`string`*, toPut: *`any`*): `any`

*Inherited from Homefront.fetchOrPut*

**

Convenience method. Calls .fetch(), and on null result calls .put() using provided toPut.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  \- |
| toPut | `any` |   |

**Returns:** `any`

___
<a id="flatten"></a>

###  flatten

**flatten**(source?: *`__type`*, basePath?: *`string`*, target?: *`__type`*): `__type`

*Inherited from Homefront.flatten*

**

Flattens nested object (dot separated keys).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` source | `__type` |
| `Optional` basePath | `string` |
| `Optional` target | `__type` |

**Returns:** `__type`

___
<a id="getdata"></a>

###  getData

**getData**(): `__type`

*Inherited from Homefront.getData*

**

Get data object.

**Returns:** `__type`

___
<a id="getmode"></a>

###  getMode

**getMode**(): `string`

*Inherited from Homefront.getMode*

**

Gets the mode.

**Returns:** `string`

___
<a id="ismodeflat"></a>

###  isModeFlat

**isModeFlat**(): `boolean`

*Inherited from Homefront.isModeFlat*

**

Returns whether or not mode is flat.

**Returns:** `boolean`

___
<a id="ismodenested"></a>

###  isModeNested

**isModeNested**(): `boolean`

*Inherited from Homefront.isModeNested*

**

Returns whether or not mode is nested.

**Returns:** `boolean`

___
<a id="merge"></a>

###  merge

**merge**(...sources: *`Array`< `__type` &#124; `Homefront`>*): `Homefront`

*Inherited from Homefront.merge*

**

Recursively merges given sources into data.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` sources | `Array`< `__type` &#124; `Homefront`> |

**Returns:** `Homefront`

___
<a id="of"></a>

###  of

**of**<`T`>(section: *`string`*): `T`

*Defined in [Library/Config/Config.ts:9](https://github.com/SpoonX/stix/blob/f075739/src/Library/Config/Config.ts#L9)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| section | `string` |

**Returns:** `T`

___
<a id="put"></a>

###  put

**put**(key?: * `string` &#124; `Array`<`string`>*, value?: *`any`*): `Homefront`

*Inherited from Homefront.put*

**

Sets value for a key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` key |  `string` &#124; `Array`<`string`>|  Array of key parts, or dot separated key. |
| `Optional` value | `any` |   |

**Returns:** `Homefront`

___
<a id="remove"></a>

###  remove

**remove**(key?: *`string`*): `Homefront`

*Inherited from Homefront.remove*

**

Removes value by key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` key | `string` |   |

**Returns:** `Homefront`

___
<a id="search"></a>

###  search

**search**(phrase?: * `string` &#124; `number`*): `Array`<`any`>

*Inherited from Homefront.search*

**

Search and return keys and values that match given string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` phrase |  `string` &#124; `number`|   |

**Returns:** `Array`<`any`>

___
<a id="setmode"></a>

###  setMode

**setMode**(mode?: *`string`*): `Homefront`

*Inherited from Homefront.setMode*

**

Sets the mode.
*__throws__*: {Error}

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` mode | `string` |

**Returns:** `Homefront`
Fluent interface

___
<a id="merge-1"></a>

### `Static` merge

**merge**(...sources: *`Array`< `__type` &#124; `Homefront`>*): `__type`

*Inherited from Homefront.merge*

**

Static version of merge, allowing you to merge objects together.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` sources | `Array`< `__type` &#124; `Homefront`> |  One or more, or array of, objects to merge into data (left to right). |

**Returns:** `__type`

___

