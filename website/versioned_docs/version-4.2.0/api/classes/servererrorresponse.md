---
title: ServerErrorResponse
id: version-4.2.0-servererrorresponse
original_id: servererrorresponse
---

# `Class` ServerErrorResponse

## Hierarchy

 [Response](response)

**↳ ServerErrorResponse**

## Index

### Constructors

* [constructor](servererrorresponse#constructor)

### Properties

* [ctx](servererrorresponse#ctx)
* [data](servererrorresponse#data)
* [headers](servererrorresponse#headers)
* [message](servererrorresponse#message)
* [meta](servererrorresponse#meta)
* [statusCode](servererrorresponse#statuscode)
* [strategy](servererrorresponse#strategy)

### Methods

* [addHeaders](servererrorresponse#addheaders)
* [appendHeader](servererrorresponse#appendheader)
* [apply](servererrorresponse#apply)
* [applyBody](servererrorresponse#applybody)
* [applyHeaders](servererrorresponse#applyheaders)
* [applyStatusCode](servererrorresponse#applystatuscode)
* [file](servererrorresponse#file)
* [format](servererrorresponse#format)
* [getStatusCode](servererrorresponse#getstatuscode)
* [html](servererrorresponse#html)
* [json](servererrorresponse#json)
* [patchContext](servererrorresponse#patchcontext)
* [removeHeader](servererrorresponse#removeheader)
* [sendFile](servererrorresponse#sendfile)
* [setHeader](servererrorresponse#setheader)
* [setHeaders](servererrorresponse#setheaders)
* [setStatusCode](servererrorresponse#setstatuscode)
* [badGateway](servererrorresponse#badgateway)
* [create](servererrorresponse#create)
* [gatewayTimeout](servererrorresponse#gatewaytimeout)
* [httpVersionNotSupported](servererrorresponse#httpversionnotsupported)
* [insufficientStorage](servererrorresponse#insufficientstorage)
* [internalServerError](servererrorresponse#internalservererror)
* [loopDetected](servererrorresponse#loopdetected)
* [networkAuthenticationRequired](servererrorresponse#networkauthenticationrequired)
* [notExtended](servererrorresponse#notextended)
* [notImplemented](servererrorresponse#notimplemented)
* [serviceUnavailable](servererrorresponse#serviceunavailable)
* [variantAlsoNegotiates](servererrorresponse#variantalsonegotiates)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new ServerErrorResponse**(__namedParameters: *`object`*): [ServerErrorResponse](servererrorresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L20)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [ServerErrorResponse](servererrorresponse)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Inherited from [Response](response).[ctx](response#ctx)*

*Defined in [Library/Response/Response.ts:8](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L8)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:18](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L18)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:10](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L10)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:20](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L20)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:16](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L16)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:14](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L14)*

___
<a id="strategy"></a>

### `Protected` strategy

**strategy**: *`string`* =  ResponseStrategies.Json

*Inherited from [Response](response).[strategy](response#strategy)*

*Defined in [Library/Response/Response.ts:12](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L12)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:93](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L93)*

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

*Defined in [Library/Response/Response.ts:105](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L105)*

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

*Inherited from [Response](response).[apply](response#apply)*

*Defined in [Library/Response/Response.ts:142](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L142)*

**Returns:** `void`

___
<a id="applybody"></a>

### `Protected` applyBody

**applyBody**(body: *`any`*): `this`

*Inherited from [Response](response).[applyBody](response#applybody)*

*Defined in [Library/Response/Response.ts:79](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L79)*

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

*Defined in [Library/Response/Response.ts:115](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L115)*

**Returns:** `this`

___
<a id="applystatuscode"></a>

###  applyStatusCode

**applyStatusCode**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*): `this`

*Inherited from [Response](response).[applyStatusCode](response#applystatuscode)*

*Defined in [Library/Response/Response.ts:63](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L63)*

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

*Defined in [Library/Response/Response.ts:121](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| location | `string` |
| `Optional` options | `SendOptions` |

**Returns:** `this`

___
<a id="format"></a>

###  format

**format**(): `object`

*Overrides [Response](response).[format](response#format)*

*Defined in [Library/Response/ServerErrorResponse.ts:53](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L53)*

**Returns:** `object`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:75](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L75)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="html"></a>

###  html

**html**(data: *`any`*): `this`

*Inherited from [Response](response).[html](response#html)*

*Defined in [Library/Response/Response.ts:135](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L135)*

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

*Defined in [Library/Response/Response.ts:128](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L128)*

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

*Defined in [Library/Response/Response.ts:29](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L29)*

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

*Defined in [Library/Response/Response.ts:109](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L109)*

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

*Defined in [Library/Response/Response.ts:52](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L52)*

**Returns:** `Promise`<`string`>

___
<a id="setheader"></a>

###  setHeader

**setHeader**(header: *`string`*, value: * `string` &#124; `Array`<`string`>*): `this`

*Inherited from [Response](response).[setHeader](response#setheader)*

*Defined in [Library/Response/Response.ts:99](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L99)*

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

*Defined in [Library/Response/Response.ts:87](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L87)*

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

*Defined in [Library/Response/Response.ts:69](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/Response.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="badgateway"></a>

### `Static` badGateway

**badGateway**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:17](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:5](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="gatewaytimeout"></a>

### `Static` gatewayTimeout

**gatewayTimeout**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:25](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="httpversionnotsupported"></a>

### `Static` httpVersionNotSupported

**httpVersionNotSupported**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:29](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="insufficientstorage"></a>

### `Static` insufficientStorage

**insufficientStorage**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:37](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="internalservererror"></a>

### `Static` internalServerError

**internalServerError**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:9](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="loopdetected"></a>

### `Static` loopDetected

**loopDetected**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:41](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="networkauthenticationrequired"></a>

### `Static` networkAuthenticationRequired

**networkAuthenticationRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:49](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="notextended"></a>

### `Static` notExtended

**notExtended**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:45](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="notimplemented"></a>

### `Static` notImplemented

**notImplemented**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:13](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="serviceunavailable"></a>

### `Static` serviceUnavailable

**serviceUnavailable**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:21](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `Object` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="variantalsonegotiates"></a>

### `Static` variantAlsoNegotiates

**variantAlsoNegotiates**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:33](https://github.com/SpoonX/stix/blob/5b30e82/src/Library/Response/ServerErrorResponse.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___

