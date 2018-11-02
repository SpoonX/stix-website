---
title: Response
---

# `Class` Response

## Hierarchy

**Response**

↳  [InformationalResponse](informationalresponse)

↳  [RedirectionResponse](redirectionresponse)

↳  [ServerErrorResponse](servererrorresponse)

↳  [ClientErrorResponse](clienterrorresponse)

↳  [SuccessfulResponse](successfulresponse)

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
* [strategy](response#strategy)

### Methods

* [addHeaders](response#addheaders)
* [appendHeader](response#appendheader)
* [apply](response#apply)
* [applyBody](response#applybody)
* [applyHeaders](response#applyheaders)
* [applyStatusCode](response#applystatuscode)
* [file](response#file)
* [format](response#format)
* [getStatusCode](response#getstatuscode)
* [html](response#html)
* [json](response#json)
* [patchContext](response#patchcontext)
* [removeHeader](response#removeheader)
* [sendFile](response#sendfile)
* [setHeader](response#setheader)
* [setHeaders](response#setheaders)
* [setStatusCode](response#setstatuscode)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new Response**(__namedParameters: *`object`*): [Response](response)

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L20)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [Response](response)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Defined in [Library/Response/Response.ts:8](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L8)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Defined in [Library/Response/Response.ts:18](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L18)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Defined in [Library/Response/Response.ts:10](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L10)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L20)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Defined in [Library/Response/Response.ts:16](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L16)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Defined in [Library/Response/Response.ts:14](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L14)*

___
<a id="strategy"></a>

### `Protected` strategy

**strategy**: *`string`* =  ResponseStrategies.Json

*Defined in [Library/Response/Response.ts:12](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L12)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Defined in [Library/Response/Response.ts:93](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="appendheader"></a>

###  appendHeader

**appendHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `void`

*Defined in [Library/Response/Response.ts:105](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |
| value |  `string` &#124; `Array`<`string`>|

**Returns:** `void`

___
<a id="apply"></a>

### `Protected` apply

**apply**(): `void`

*Defined in [Library/Response/Response.ts:142](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L142)*

**Returns:** `void`

___
<a id="applybody"></a>

### `Protected` applyBody

**applyBody**(body: *`any`*): `this`

*Defined in [Library/Response/Response.ts:79](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `this`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Defined in [Library/Response/Response.ts:115](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L115)*

**Returns:** `this`

___
<a id="applystatuscode"></a>

###  applyStatusCode

**applyStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Defined in [Library/Response/Response.ts:63](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="file"></a>

###  file

**file**(location: *`string`*, options?: *`SendOptions`*): `this`

*Defined in [Library/Response/Response.ts:121](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` options | `SendOptions` |

**Returns:** `this`

___
<a id="format"></a>

### `Protected` format

**format**(): `any`

*Defined in [Library/Response/Response.ts:146](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L146)*

**Returns:** `any`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Defined in [Library/Response/Response.ts:75](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L75)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="html"></a>

###  html

**html**(data: *`any`*): `this`

*Defined in [Library/Response/Response.ts:135](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L135)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `this`

___
<a id="json"></a>

###  json

**json**(data: *`any`*): `this`

*Defined in [Library/Response/Response.ts:128](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `this`

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `Promise`<`void`>

*Defined in [Library/Response/Response.ts:29](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | [ContextInterface](../interfaces/contextinterface) |

**Returns:** `Promise`<`void`>

___
<a id="removeheader"></a>

###  removeHeader

**removeHeader**(header: *`string`*): `this`

*Defined in [Library/Response/Response.ts:109](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| header | `string` |

**Returns:** `this`

___
<a id="sendfile"></a>

### `Protected` sendFile

**sendFile**(): `Promise`<`string`>

*Defined in [Library/Response/Response.ts:52](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L52)*

**Returns:** `Promise`<`string`>

___
<a id="setheader"></a>

###  setHeader

**setHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `this`

*Defined in [Library/Response/Response.ts:99](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L99)*

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

*Defined in [Library/Response/Response.ts:87](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L87)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| headers | `object` |

**Returns:** `this`

___
<a id="setstatuscode"></a>

###  setStatusCode

**setStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Defined in [Library/Response/Response.ts:69](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___

