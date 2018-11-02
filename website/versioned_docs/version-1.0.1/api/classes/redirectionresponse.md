---
title: RedirectionResponse
id: version-1.0.1-redirectionresponse
original_id: redirectionresponse
---

# `Class` RedirectionResponse

## Hierarchy

 [Response](response)

**↳ RedirectionResponse**

## Index

### Constructors

* [constructor](redirectionresponse#constructor)

### Properties

* [ctx](redirectionresponse#ctx)
* [data](redirectionresponse#data)
* [headers](redirectionresponse#headers)
* [message](redirectionresponse#message)
* [meta](redirectionresponse#meta)
* [statusCode](redirectionresponse#statuscode)

### Methods

* [addHeaders](redirectionresponse#addheaders)
* [appendHeader](redirectionresponse#appendheader)
* [apply](redirectionresponse#apply)
* [applyHeaders](redirectionresponse#applyheaders)
* [getStatusCode](redirectionresponse#getstatuscode)
* [patchContext](redirectionresponse#patchcontext)
* [removeHeader](redirectionresponse#removeheader)
* [setBody](redirectionresponse#setbody)
* [setHeader](redirectionresponse#setheader)
* [setHeaders](redirectionresponse#setheaders)
* [setStatusCode](redirectionresponse#setstatuscode)
* [create](redirectionresponse#create)
* [found](redirectionresponse#found)
* [movedPermanently](redirectionresponse#movedpermanently)
* [multipleChoices](redirectionresponse#multiplechoices)
* [notModified](redirectionresponse#notmodified)
* [permanentRedirect](redirectionresponse#permanentredirect)
* [seeOther](redirectionresponse#seeother)
* [switchProxy](redirectionresponse#switchproxy)
* [temporaryRedirect](redirectionresponse#temporaryredirect)
* [useProxy](redirectionresponse#useproxy)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new RedirectionResponse**(__namedParameters: *`object`*): [RedirectionResponse](redirectionresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L17)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [RedirectionResponse](redirectionresponse)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Inherited from [Response](response).[ctx](response#ctx)*

*Defined in [Library/Response/Response.ts:7](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:15](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:9](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:13](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:11](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:54](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L54)*

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

*Defined in [Library/Response/Response.ts:66](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L66)*

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

*Defined in [Library/Response/RedirectionResponse.ts:45](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L45)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:76](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:38](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Inherited from [Response](response).[patchContext](response#patchcontext)*

*Defined in [Library/Response/Response.ts:26](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L26)*

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

*Defined in [Library/Response/Response.ts:70](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |

**Returns:** `this`

___
<a id="setbody"></a>

###  setBody

**setBody**(body: *`any`*): `this`

*Inherited from [Response](response).[setBody](response#setbody)*

*Defined in [Library/Response/Response.ts:42](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L42)*

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

*Defined in [Library/Response/Response.ts:60](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L60)*

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

*Defined in [Library/Response/Response.ts:48](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L48)*

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

*Defined in [Library/Response/Response.ts:32](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:5](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="found"></a>

### `Static` found

**found**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:17](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="movedpermanently"></a>

### `Static` movedPermanently

**movedPermanently**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:13](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="multiplechoices"></a>

### `Static` multipleChoices

**multipleChoices**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:9](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="notmodified"></a>

### `Static` notModified

**notModified**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:25](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="permanentredirect"></a>

### `Static` permanentRedirect

**permanentRedirect**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:41](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="seeother"></a>

### `Static` seeOther

**seeOther**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:21](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="switchproxy"></a>

### `Static` switchProxy

**switchProxy**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:33](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="temporaryredirect"></a>

### `Static` temporaryRedirect

**temporaryRedirect**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:37](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="useproxy"></a>

### `Static` useProxy

**useProxy**(location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:29](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/RedirectionResponse.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___

