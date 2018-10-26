---
title: AbstractActionController
---

# `Class` AbstractActionController

The AbstractActionController is an abstract class (Who would have guessed?) that, being extended by a controller, injects the ResponseService along with some convenient methods for the most used response types. If your desired response is not among these helpers, you can access the ResponseService itself to access all available responses:

```ts
export class MyController extends AbstractActionController {
  find(ctx) {
     // you do your magic

     return this.getResponseService().clientError().iAmATeapot('Make your own coffee');
  }
}
```

## Hierarchy

**AbstractActionController**

## Index

### Properties

* [responseService](abstractactioncontroller#responseservice)

### Methods

* [badRequestResponse](abstractactioncontroller#badrequestresponse)
* [createdResponse](abstractactioncontroller#createdresponse)
* [forbiddenResponse](abstractactioncontroller#forbiddenresponse)
* [getResponseService](abstractactioncontroller#getresponseservice)
* [internalServerErrorResponse](abstractactioncontroller#internalservererrorresponse)
* [notFoundResponse](abstractactioncontroller#notfoundresponse)
* [okResponse](abstractactioncontroller#okresponse)
* [permanentRedirectResponse](abstractactioncontroller#permanentredirectresponse)
* [requestTimeoutResponse](abstractactioncontroller#requesttimeoutresponse)
* [unauthorizedResponse](abstractactioncontroller#unauthorizedresponse)

---

## Properties

<a id="responseservice"></a>

### `Protected` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Controller/AbstractActionController.ts:29](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L29)*

*__decorator__*: [inject](../#inject)

*__type__*: ResponseService

___

## Methods

<a id="badrequestresponse"></a>

### `Protected` badRequestResponse

**badRequestResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:102](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L102)*

Convenience method to respond with a 400 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="createdresponse"></a>

### `Protected` createdResponse

**createdResponse**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Controller/AbstractActionController.ts:53](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L53)*

Convenience method to respond with a 201 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="forbiddenresponse"></a>

### `Protected` forbiddenResponse

**forbiddenResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:90](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L90)*

Convenience method to respond with a 403 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="getresponseservice"></a>

### `Protected` getResponseService

**getResponseService**(): [ResponseService](responseservice)

*Defined in [Library/Controller/AbstractActionController.ts:31](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L31)*

**Returns:** [ResponseService](responseservice)

___
<a id="internalservererrorresponse"></a>

### `Protected` internalServerErrorResponse

**internalServerErrorResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:126](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L126)*

Convenience method to respond with a 500 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="notfoundresponse"></a>

### `Protected` notFoundResponse

**notFoundResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:65](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L65)*

Convenience method to respond with a 404 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="okresponse"></a>

### `Protected` okResponse

**okResponse**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Controller/AbstractActionController.ts:42](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L42)*

Convenience method to respond with a 200 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="permanentredirectresponse"></a>

### `Protected` permanentRedirectResponse

**permanentRedirectResponse**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Controller/AbstractActionController.ts:139](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L139)*

Convenience method to respond with a 308 status code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| location | `string` |  - |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="requesttimeoutresponse"></a>

### `Protected` requestTimeoutResponse

**requestTimeoutResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:77](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L77)*

Convenience method to respond with a 408 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unauthorizedresponse"></a>

### `Protected` unauthorizedResponse

**unauthorizedResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:114](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/AbstractActionController.ts#L114)*

Convenience method to respond with a 401 status code.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

