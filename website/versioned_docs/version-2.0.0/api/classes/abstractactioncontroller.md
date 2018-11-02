---
title: AbstractActionController
id: version-2.0.0-abstractactioncontroller
original_id: abstractactioncontroller
---

# `Class` AbstractActionController

## Hierarchy

**AbstractActionController**

## Index

### Constructors

* [constructor](abstractactioncontroller#constructor)

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

## Constructors

<a id="constructor"></a>

###  constructor

**new AbstractActionController**(responseService: *[ResponseService](responseservice)*): [AbstractActionController](abstractactioncontroller)

*Defined in [Library/Controller/AbstractActionController.ts:4](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| responseService | [ResponseService](responseservice) |

**Returns:** [AbstractActionController](abstractactioncontroller)

___

## Properties

<a id="responseservice"></a>

### `Protected` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Controller/AbstractActionController.ts:4](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L4)*

___

## Methods

<a id="badrequestresponse"></a>

### `Protected` badRequestResponse

**badRequestResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:34](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L34)*

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

*Defined in [Library/Controller/AbstractActionController.ts:18](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L18)*

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

*Defined in [Library/Controller/AbstractActionController.ts:30](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L30)*

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

*Defined in [Library/Controller/AbstractActionController.ts:10](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L10)*

**Returns:** [ResponseService](responseservice)

___
<a id="internalservererrorresponse"></a>

### `Protected` internalServerErrorResponse

**internalServerErrorResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Controller/AbstractActionController.ts:42](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L42)*

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

*Defined in [Library/Controller/AbstractActionController.ts:22](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L22)*

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

*Defined in [Library/Controller/AbstractActionController.ts:14](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L14)*

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

*Defined in [Library/Controller/AbstractActionController.ts:46](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L46)*

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

*Defined in [Library/Controller/AbstractActionController.ts:26](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L26)*

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

*Defined in [Library/Controller/AbstractActionController.ts:38](https://github.com/SpoonX/stix/blob/e9313e4/src/Library/Controller/AbstractActionController.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

