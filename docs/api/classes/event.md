---
title: Event
---

# `Class` Event

*__template__*: T

## Type parameters
#### T 
## Hierarchy

**Event**

## Index

### Constructors

* [constructor](event#constructor)

### Properties

* [event](event#event-1)
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

*Defined in [Library/EventManager/Event.ts:21](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L21)*

Creates an instance of Event.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string` |  - |
| target | `any` |  - |
| payload | `any` |   |

**Returns:** [Event](event)

___

## Properties

<a id="event-1"></a>

### `Private` event

**event**: *`string`*

*Defined in [Library/EventManager/Event.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L11)*

*__type__*: string

___
<a id="payload"></a>

### `Private` payload

**payload**: *`any`*

*Defined in [Library/EventManager/Event.ts:21](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L21)*

*__type__*: any

___
<a id="target"></a>

### `Private` target

**target**: *`any`*

*Defined in [Library/EventManager/Event.ts:16](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L16)*

*__type__*: any

___

## Methods

<a id="getevent"></a>

###  getEvent

**getEvent**(): `string`

*Defined in [Library/EventManager/Event.ts:41](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L41)*

**Returns:** `string`

___
<a id="getpayload"></a>

###  getPayload

**getPayload**(): `any`

*Defined in [Library/EventManager/Event.ts:55](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L55)*

**Returns:** `any`

___
<a id="gettarget"></a>

###  getTarget

**getTarget**(): `T`

*Defined in [Library/EventManager/Event.ts:51](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/Event.ts#L51)*

*__memberof__*: Event

**Returns:** `T`

___

