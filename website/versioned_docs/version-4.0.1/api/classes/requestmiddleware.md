---
title: RequestMiddleware
id: version-4.0.1-requestmiddleware
original_id: requestmiddleware
---

# `Class` RequestMiddleware

## Hierarchy

 [AbstractMiddleware](abstractmiddleware)

**↳ RequestMiddleware**

## Index

### Methods

* [asCallback](requestmiddleware#ascallback)
* [pass](requestmiddleware#pass)

---

## Methods

<a id="ascallback"></a>

###  asCallback

**asCallback**(): [MiddlewareType]()

*Inherited from [AbstractMiddleware](abstractmiddleware).[asCallback](abstractmiddleware#ascallback)*

*Defined in [Library/Middleware/AbstractMiddleware.ts:7](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Middleware/AbstractMiddleware.ts#L7)*

**Returns:** [MiddlewareType]()

___
<a id="pass"></a>

###  pass

**pass**(ctx: *[ContextInterface](../interfaces/contextinterface)*, next: *`Function`*): `Promise`<`void`>

*Overrides [AbstractMiddleware](abstractmiddleware).[pass](abstractmiddleware#pass)*

*Defined in [Library/Middleware/RequestMiddleware.ts:11](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Middleware/RequestMiddleware.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |
| next | `Function` |

**Returns:** `Promise`<`void`>

___

