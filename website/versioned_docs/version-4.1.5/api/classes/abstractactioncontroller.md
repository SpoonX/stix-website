---
title: AbstractActionController
id: version-4.1.5-abstractactioncontroller
original_id: abstractactioncontroller
---

# `Class` AbstractActionController

## Hierarchy

 [AbstractResponseHelper](abstractresponsehelper)

**↳ AbstractActionController**

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[responseService](abstractresponsehelper#responseservice)*

*Defined in [Library/Response/AbstractResponseHelper.ts:10](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L10)*

___

## Methods

<a id="badrequestresponse"></a>

### `Protected` badRequestResponse

**badRequestResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[badRequestResponse](abstractresponsehelper#badrequestresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:36](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L36)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[createdResponse](abstractresponsehelper#createdresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:20](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L20)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[forbiddenResponse](abstractresponsehelper#forbiddenresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:32](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L32)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[getResponseService](abstractresponsehelper#getresponseservice)*

*Defined in [Library/Response/AbstractResponseHelper.ts:12](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L12)*

**Returns:** [ResponseService](responseservice)

___
<a id="internalservererrorresponse"></a>

### `Protected` internalServerErrorResponse

**internalServerErrorResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[internalServerErrorResponse](abstractresponsehelper#internalservererrorresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:44](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L44)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[notFoundResponse](abstractresponsehelper#notfoundresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:24](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L24)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[okResponse](abstractresponsehelper#okresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:16](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L16)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[permanentRedirectResponse](abstractresponsehelper#permanentredirectresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:48](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L48)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[requestTimeoutResponse](abstractresponsehelper#requesttimeoutresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:28](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L28)*

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

*Inherited from [AbstractResponseHelper](abstractresponsehelper).[unauthorizedResponse](abstractresponsehelper#unauthorizedresponse)*

*Defined in [Library/Response/AbstractResponseHelper.ts:40](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/AbstractResponseHelper.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

