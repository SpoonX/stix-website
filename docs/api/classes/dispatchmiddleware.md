---
title: DispatchMiddleware
---

# `Class` DispatchMiddleware

## Hierarchy

 [AbstractMiddleware](abstractmiddleware)

**↳ DispatchMiddleware**

## Index

### Properties

* [logger](dispatchmiddleware#logger)
* [responseService](dispatchmiddleware#responseservice)

### Methods

* [asCallback](dispatchmiddleware#ascallback)
* [pass](dispatchmiddleware#pass)

---

## Properties

<a id="logger"></a>

### `Private` logger

**logger**: *[LoggerService](loggerservice)*

*Defined in [Library/Middleware/DispatchMiddleware.ts:16](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/DispatchMiddleware.ts#L16)*

___
<a id="responseservice"></a>

### `Private` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Middleware/DispatchMiddleware.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/DispatchMiddleware.ts#L13)*

___

## Methods

<a id="ascallback"></a>

###  asCallback

**asCallback**(): [RegisteredMiddlewareType]()

*Inherited from [AbstractMiddleware](abstractmiddleware).[asCallback](abstractmiddleware#ascallback)*

*Defined in [Library/Middleware/AbstractMiddleware.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/AbstractMiddleware.ts#L7)*

**Returns:** [RegisteredMiddlewareType]()

___
<a id="pass"></a>

###  pass

**pass**(ctx: *[ContextInterface](../interfaces/contextinterface)*, next: *`Function`*): `Promise`<`any`>

*Overrides [AbstractMiddleware](abstractmiddleware).[pass](abstractmiddleware#pass)*

*Defined in [Library/Middleware/DispatchMiddleware.ts:18](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/DispatchMiddleware.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |
| next | `Function` |

**Returns:** `Promise`<`any`>

___

