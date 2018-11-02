---
title: AbstractResponseHelper
id: version-4.2.0-abstractresponsehelper
original_id: abstractresponsehelper
---

# `Class` AbstractResponseHelper

## Hierarchy

**AbstractResponseHelper**

↳  [AbstractActionController](abstractactioncontroller)

## Index

### Properties

* [responseService](abstractresponsehelper#responseservice)

### Methods

* [badRequestResponse](abstractresponsehelper#badrequestresponse)
* [createdResponse](abstractresponsehelper#createdresponse)
* [forbiddenResponse](abstractresponsehelper#forbiddenresponse)
* [getResponseService](abstractresponsehelper#getresponseservice)
* [internalServerErrorResponse](abstractresponsehelper#internalservererrorresponse)
* [notFoundResponse](abstractresponsehelper#notfoundresponse)
* [okResponse](abstractresponsehelper#okresponse)
* [permanentRedirectResponse](abstractresponsehelper#permanentredirectresponse)
* [requestTimeoutResponse](abstractresponsehelper#requesttimeoutresponse)
* [unauthorizedResponse](abstractresponsehelper#unauthorizedresponse)

---

## Properties

<a id="responseservice"></a>

### `Protected` responseService

**responseService**: *[ResponseService](responseservice)*

*Defined in [Library/Response/AbstractResponseHelper.ts:10](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L10)*

___

## Methods

<a id="badrequestresponse"></a>

### `Protected` badRequestResponse

**badRequestResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/AbstractResponseHelper.ts:36](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L36)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:20](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L20)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:32](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L32)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:12](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L12)*

**Returns:** [ResponseService](responseservice)

___
<a id="internalservererrorresponse"></a>

### `Protected` internalServerErrorResponse

**internalServerErrorResponse**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/AbstractResponseHelper.ts:44](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L44)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:24](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L24)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:16](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L16)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:48](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L48)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:28](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L28)*

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

*Defined in [Library/Response/AbstractResponseHelper.ts:40](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/AbstractResponseHelper.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

