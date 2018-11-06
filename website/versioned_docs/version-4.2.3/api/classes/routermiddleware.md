---
title: RouterMiddleware
id: version-4.2.3-routermiddleware
original_id: routermiddleware
---

# `Class` RouterMiddleware

## Hierarchy

 [AbstractMiddleware](abstractmiddleware)

**↳ RouterMiddleware**

## Index

### Properties

* [controllerManager](routermiddleware#controllermanager)
* [responseService](routermiddleware#responseservice)
* [routerService](routermiddleware#routerservice)

### Methods

* [asCallback](routermiddleware#ascallback)
* [pass](routermiddleware#pass)

---

## Properties

<a id="controllermanager"></a>

### `Private` controllerManager

**controllerManager**: *[ControllerManager](controllermanager)*

*Defined in [Library/Middleware/RouterMiddleware.ts:20](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RouterMiddleware.ts#L20)*

___
<a id="responseservice"></a>

### `Private` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Middleware/RouterMiddleware.ts:17](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RouterMiddleware.ts#L17)*

___
<a id="routerservice"></a>

### `Private` routerService

**routerService**: *[RouterService](routerservice)*

*Defined in [Library/Middleware/RouterMiddleware.ts:14](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RouterMiddleware.ts#L14)*

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

*Defined in [Library/Middleware/RouterMiddleware.ts:22](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RouterMiddleware.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |
| next | `Function` |

**Returns:** `Promise`<`any`>

___

