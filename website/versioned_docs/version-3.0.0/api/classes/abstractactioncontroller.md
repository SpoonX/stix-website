---
title: AbstractActionController
id: version-3.0.0-abstractactioncontroller
original_id: abstractactioncontroller
---

# `Class` AbstractActionController

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

*Defined in [Library/Controller/AbstractActionController.ts:6](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L6)*

___

## Methods

<a id="badrequestresponse"></a>

### `Protected` badRequestResponse

**badRequestResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:32](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="createdresponse"></a>

### `Protected` createdResponse

**createdResponse**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Controller/AbstractActionController.ts:16](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="forbiddenresponse"></a>

### `Protected` forbiddenResponse

**forbiddenResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:28](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="getresponseservice"></a>

### `Protected` getResponseService

**getResponseService**(): [ResponseService](responseservice)

*Defined in [Library/Controller/AbstractActionController.ts:8](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L8)*

**Returns:** [ResponseService](responseservice)

___
<a id="internalservererrorresponse"></a>

### `Protected` internalServerErrorResponse

**internalServerErrorResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:40](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="notfoundresponse"></a>

### `Protected` notFoundResponse

**notFoundResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:20](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="okresponse"></a>

### `Protected` okResponse

**okResponse**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Controller/AbstractActionController.ts:12](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="permanentredirectresponse"></a>

### `Protected` permanentRedirectResponse

**permanentRedirectResponse**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Controller/AbstractActionController.ts:44](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="requesttimeoutresponse"></a>

### `Protected` requestTimeoutResponse

**requestTimeoutResponse**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:24](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unauthorizedresponse"></a>

### `Protected` unauthorizedResponse

**unauthorizedResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:36](https://github.com/SpoonX/stix/blob/ceb165c/src/Library/Controller/AbstractActionController.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

