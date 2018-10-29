---
title: Event
id: version-3.0.1-event
original_id: event
---

# `Class` Event

## Type parameters
#### T 
## Hierarchy

**Event**

## Index

### Constructors

* [constructor](event#constructor)

### Properties

* [event](event#event)
* [payload](event#payload)
* [target](event#target)

### Methods

* [getEvent](event#getevent)
* [getPayload](event#getpayload)
* [getTarget](event#gettarget)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Event**(event: *`string`*, target: *`any`*, payload: *`any`*): [Event](event)

*Defined in [Library/EventManager/Event.ts:1](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L1)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| target | `any` |
| payload | `any` |

**Returns:** [Event](event)

___

## Properties

<a id="event"></a>

### `Private` event

**event**: *`string`*

*Defined in [Library/EventManager/Event.ts:2](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L2)*

___
<a id="payload"></a>

### `Private` payload

**payload**: *`any`*

*Defined in [Library/EventManager/Event.ts:2](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L2)*

___
<a id="target"></a>

### `Private` target

**target**: *`any`*

*Defined in [Library/EventManager/Event.ts:2](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L2)*

___

## Methods

<a id="getevent"></a>

###  getEvent

**getEvent**(): `string`

*Defined in [Library/EventManager/Event.ts:4](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L4)*

**Returns:** `string`

___
<a id="getpayload"></a>

###  getPayload

**getPayload**(): `any`

*Defined in [Library/EventManager/Event.ts:12](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L12)*

**Returns:** `any`

___
<a id="gettarget"></a>

###  getTarget

**getTarget**(): `T`

*Defined in [Library/EventManager/Event.ts:8](https://github.com/SpoonX/stix/blob/f097835/src/Library/EventManager/Event.ts#L8)*

**Returns:** `T`

___

