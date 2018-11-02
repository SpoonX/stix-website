---
title: RedirectionResponse
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
* [strategy](redirectionresponse#strategy)

### Methods

* [addHeaders](redirectionresponse#addheaders)
* [appendHeader](redirectionresponse#appendheader)
* [apply](redirectionresponse#apply)
* [applyBody](redirectionresponse#applybody)
* [applyHeaders](redirectionresponse#applyheaders)
* [applyStatusCode](redirectionresponse#applystatuscode)
* [file](redirectionresponse#file)
* [format](redirectionresponse#format)
* [getStatusCode](redirectionresponse#getstatuscode)
* [html](redirectionresponse#html)
* [json](redirectionresponse#json)
* [patchContext](redirectionresponse#patchcontext)
* [removeHeader](redirectionresponse#removeheader)
* [sendFile](redirectionresponse#sendfile)
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

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L20)*

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

*Defined in [Library/Response/Response.ts:8](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L8)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:18](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L18)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:10](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L10)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L20)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:16](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L16)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:14](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L14)*

___
<a id="strategy"></a>

### `Protected` strategy

**strategy**: *`string`* =  ResponseStrategies.Json

*Inherited from [Response](response).[strategy](response#strategy)*

*Defined in [Library/Response/Response.ts:12](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L12)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

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

*Inherited from [Response](response).[appendHeader](response#appendheader)*

*Defined in [Library/Response/Response.ts:105](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L105)*

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

*Defined in [Library/Response/RedirectionResponse.ts:45](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L45)*

**Returns:** `void`

___
<a id="applybody"></a>

### `Protected` applyBody

**applyBody**(body: *`any`*): `this`

*Inherited from [Response](response).[applyBody](response#applybody)*

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

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:115](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L115)*

**Returns:** `this`

___
<a id="applystatuscode"></a>

###  applyStatusCode

**applyStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Inherited from [Response](response).[applyStatusCode](response#applystatuscode)*

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

*Inherited from [Response](response).[file](response#file)*

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

*Inherited from [Response](response).[format](response#format)*

*Defined in [Library/Response/Response.ts:146](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L146)*

**Returns:** `any`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:75](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L75)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="html"></a>

###  html

**html**(data: *`any`*): `this`

*Inherited from [Response](response).[html](response#html)*

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

*Inherited from [Response](response).[json](response#json)*

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

*Inherited from [Response](response).[patchContext](response#patchcontext)*

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

*Inherited from [Response](response).[removeHeader](response#removeheader)*

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

*Inherited from [Response](response).[sendFile](response#sendfile)*

*Defined in [Library/Response/Response.ts:52](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L52)*

**Returns:** `Promise`<`string`>

___
<a id="setheader"></a>

###  setHeader

**setHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `this`

*Inherited from [Response](response).[setHeader](response#setheader)*

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

*Inherited from [Response](response).[setHeaders](response#setheaders)*

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

*Inherited from [Response](response).[setStatusCode](response#setstatuscode)*

*Defined in [Library/Response/Response.ts:69](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/Response.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, location: *`string`*, alt?: *`string`*, meta?: *`any`*): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/RedirectionResponse.ts:5](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L5)*

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

*Defined in [Library/Response/RedirectionResponse.ts:17](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L17)*

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

*Defined in [Library/Response/RedirectionResponse.ts:13](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L13)*

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

*Defined in [Library/Response/RedirectionResponse.ts:9](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L9)*

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

*Defined in [Library/Response/RedirectionResponse.ts:25](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L25)*

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

*Defined in [Library/Response/RedirectionResponse.ts:41](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L41)*

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

*Defined in [Library/Response/RedirectionResponse.ts:21](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L21)*

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

*Defined in [Library/Response/RedirectionResponse.ts:33](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L33)*

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

*Defined in [Library/Response/RedirectionResponse.ts:37](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L37)*

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

*Defined in [Library/Response/RedirectionResponse.ts:29](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Response/RedirectionResponse.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` alt | `string` |
| `Optional` meta | `any` |

**Returns:** [RedirectionResponse](redirectionresponse)

___

