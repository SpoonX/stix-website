---
title: Response
id: version-3.0.0-response
original_id: response
---

# `Class` Response

## Hierarchy

**Response**

↳  [ServerErrorResponse](servererrorresponse)

↳  [SuccessfulResponse](successfulresponse)

↳  [ClientErrorResponse](clienterrorresponse)

↳  [InformationalResponse](informationalresponse)

↳  [RedirectionResponse](redirectionresponse)

## Index

### Constructors

* [constructor](response#constructor)

### Properties

* [ctx](response#ctx)
* [data](response#data)
* [headers](response#headers)
* [message](response#message)
* [meta](response#meta)
* [statusCode](response#statuscode)

### Methods

* [addHeaders](response#addheaders)
* [appendHeader](response#appendheader)
* [apply](response#apply)
* [applyHeaders](response#applyheaders)
* [getStatusCode](response#getstatuscode)
* [patchContext](response#patchcontext)
* [removeHeader](response#removeheader)
* [setBody](response#setbody)
* [setHeader](response#setheader)
* [setHeaders](response#setheaders)
* [setStatusCode](response#setstatuscode)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new Response**(__namedParameters: *`object`*): [Response](response)

*Defined in [Library/Response/Response.ts:17](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Response](response)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Defined in [Library/Response/Response.ts:7](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Defined in [Library/Response/Response.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Defined in [Library/Response/Response.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Defined in [Library/Response/Response.ts:17](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Defined in [Library/Response/Response.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Defined in [Library/Response/Response.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Defined in [Library/Response/Response.ts:54](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="appendheader"></a>

###  appendHeader

**appendHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `void`

*Defined in [Library/Response/Response.ts:66](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | `string` |
| value |  `string` &#124; `Array`<`string`>|

**Returns:** `void`

___
<a id="apply"></a>

### `Abstract` apply

**apply**(): `void`

*Defined in [Library/Response/Response.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L5)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Defined in [Library/Response/Response.ts:76](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Defined in [Library/Response/Response.ts:38](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Defined in [Library/Response/Response.ts:26](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |

**Returns:** `void`

___
<a id="removeheader"></a>

###  removeHeader

**removeHeader**(header: *`string`*): `this`

*Defined in [Library/Response/Response.ts:70](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | `string` |

**Returns:** `this`

___
<a id="setbody"></a>

###  setBody

**setBody**(body: *`any`*): `this`

*Defined in [Library/Response/Response.ts:42](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `this`

___
<a id="setheader"></a>

###  setHeader

**setHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `this`

*Defined in [Library/Response/Response.ts:60](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | `string` |
| value |  `string` &#124; `Array`<`string`>|

**Returns:** `this`

___
<a id="setheaders"></a>

###  setHeaders

**setHeaders**(headers: *`object`*): `this`

*Defined in [Library/Response/Response.ts:48](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="setstatuscode"></a>

###  setStatusCode

**setStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Defined in [Library/Response/Response.ts:32](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___

