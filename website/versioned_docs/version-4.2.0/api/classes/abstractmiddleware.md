---
title: AbstractMiddleware
id: version-4.2.0-abstractmiddleware
original_id: abstractmiddleware
---

# `Class` AbstractMiddleware

## Hierarchy

**AbstractMiddleware**

↳  [DispatchMiddleware](dispatchmiddleware)

↳  [RequestMiddleware](requestmiddleware)

↳  [RouterMiddleware](routermiddleware)

## Index

### Methods

* [asCallback](abstractmiddleware#ascallback)
* [pass](abstractmiddleware#pass)

---

## Methods

<a id="ascallback"></a>

###  asCallback

**asCallback**(): [RegisteredMiddlewareType](../modules/middlewaretypes#registeredmiddlewaretype)

*Defined in [Library/Middleware/AbstractMiddleware.ts:7](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Middleware/AbstractMiddleware.ts#L7)*

**Returns:** [RegisteredMiddlewareType](../modules/middlewaretypes#registeredmiddlewaretype)

___
<a id="pass"></a>

### `Abstract` pass

**pass**(ctx?: *[ContextInterface](../interfaces/contextinterface)*, next?: *`Function`*): `any`

*Defined in [Library/Middleware/AbstractMiddleware.ts:5](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Middleware/AbstractMiddleware.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` ctx | [ContextInterface](../interfaces/contextinterface) |
| `Optional` next | `Function` |

**Returns:** `any`

___

