---
title: SuccessfulResponse
id: version-4.1.7-successfulresponse
original_id: successfulresponse
---

# `Class` SuccessfulResponse

## Hierarchy

 [Response](response)

**↳ SuccessfulResponse**

## Index

### Constructors

* [constructor](successfulresponse#constructor)

### Properties

* [ctx](successfulresponse#ctx)
* [data](successfulresponse#data)
* [headers](successfulresponse#headers)
* [message](successfulresponse#message)
* [meta](successfulresponse#meta)
* [statusCode](successfulresponse#statuscode)

### Methods

* [addHeaders](successfulresponse#addheaders)
* [appendHeader](successfulresponse#appendheader)
* [apply](successfulresponse#apply)
* [applyHeaders](successfulresponse#applyheaders)
* [getStatusCode](successfulresponse#getstatuscode)
* [patchContext](successfulresponse#patchcontext)
* [removeHeader](successfulresponse#removeheader)
* [setBody](successfulresponse#setbody)
* [setHeader](successfulresponse#setheader)
* [setHeaders](successfulresponse#setheaders)
* [setStatusCode](successfulresponse#setstatuscode)
* [accepted](successfulresponse#accepted)
* [alreadyReported](successfulresponse#alreadyreported)
* [create](successfulresponse#create)
* [created](successfulresponse#created)
* [imUsed](successfulresponse#imused)
* [multiStatus](successfulresponse#multistatus)
* [noContent](successfulresponse#nocontent)
* [nonAuthoritativeInformation](successfulresponse#nonauthoritativeinformation)
* [ok](successfulresponse#ok)
* [partialContent](successfulresponse#partialcontent)
* [resetContent](successfulresponse#resetcontent)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new SuccessfulResponse**(__namedParameters: *`object`*): [SuccessfulResponse](successfulresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L17)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [SuccessfulResponse](successfulresponse)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Inherited from [Response](response).[ctx](response#ctx)*

*Defined in [Library/Response/Response.ts:7](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:15](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:9](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:13](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:11](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:54](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="appendheader"></a>

###  appendHeader

**appendHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `void`

*Inherited from [Response](response).[appendHeader](response#appendheader)*

*Defined in [Library/Response/Response.ts:66](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |
| value |  `string` &#124; `Array`<`string`>|

**Returns:** `void`

___
<a id="apply"></a>

###  apply

**apply**(): `void`

*Overrides [Response](response).[apply](response#apply)*

*Defined in [Library/Response/SuccessfulResponse.ts:49](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L49)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:76](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:38](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Inherited from [Response](response).[patchContext](response#patchcontext)*

*Defined in [Library/Response/Response.ts:26](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |

**Returns:** `void`

___
<a id="removeheader"></a>

###  removeHeader

**removeHeader**(header: *`string`*): `this`

*Inherited from [Response](response).[removeHeader](response#removeheader)*

*Defined in [Library/Response/Response.ts:70](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |

**Returns:** `this`

___
<a id="setbody"></a>

### `Protected` setBody

**setBody**(body: *`any`*): `this`

*Inherited from [Response](response).[setBody](response#setbody)*

*Defined in [Library/Response/Response.ts:42](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `this`

___
<a id="setheader"></a>

###  setHeader

**setHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `this`

*Inherited from [Response](response).[setHeader](response#setheader)*

*Defined in [Library/Response/Response.ts:60](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |
| value |  `string` &#124; `Array`<`string`>|

**Returns:** `this`

___
<a id="setheaders"></a>

###  setHeaders

**setHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[setHeaders](response#setheaders)*

*Defined in [Library/Response/Response.ts:48](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="setstatuscode"></a>

###  setStatusCode

**setStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Inherited from [Response](response).[setStatusCode](response#setstatuscode)*

*Defined in [Library/Response/Response.ts:32](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="accepted"></a>

### `Static` accepted

**accepted**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:17](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="alreadyreported"></a>

### `Static` alreadyReported

**alreadyReported**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:41](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:5](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="created"></a>

### `Static` created

**created**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:13](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="imused"></a>

### `Static` imUsed

**imUsed**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:45](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="multistatus"></a>

### `Static` multiStatus

**multiStatus**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:37](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="nocontent"></a>

### `Static` noContent

**noContent**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:25](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="nonauthoritativeinformation"></a>

### `Static` nonAuthoritativeInformation

**nonAuthoritativeInformation**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:21](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="ok"></a>

### `Static` ok

**ok**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:9](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="partialcontent"></a>

### `Static` partialContent

**partialContent**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:33](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___
<a id="resetcontent"></a>

### `Static` resetContent

**resetContent**(data?: *`any`*, meta?: *`any`*): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/SuccessfulResponse.ts:29](https://github.com/SpoonX/stix/blob/6e28786/src/Library/Response/SuccessfulResponse.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [SuccessfulResponse](successfulresponse)

___

