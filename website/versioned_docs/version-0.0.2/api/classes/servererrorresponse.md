---
title: ServerErrorResponse
id: version-0.0.2-servererrorresponse
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

### Methods

* [addHeaders](servererrorresponse#addheaders)
* [appendHeader](servererrorresponse#appendheader)
* [apply](servererrorresponse#apply)
* [applyHeaders](servererrorresponse#applyheaders)
* [getStatusCode](servererrorresponse#getstatuscode)
* [patchContext](servererrorresponse#patchcontext)
* [removeHeader](servererrorresponse#removeheader)
* [setBody](servererrorresponse#setbody)
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

###  constructor

**new ServerErrorResponse**(__namedParameters: *`object`*): [ServerErrorResponse](servererrorresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L17)*

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

*Defined in [Library/Response/Response.ts:7](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:15](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:9](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:13](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:11](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:54](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L54)*

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

*Defined in [Library/Response/Response.ts:66](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L66)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:53](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L53)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:76](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:38](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Inherited from [Response](response).[patchContext](response#patchcontext)*

*Defined in [Library/Response/Response.ts:26](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L26)*

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

*Defined in [Library/Response/Response.ts:70](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L70)*

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

*Defined in [Library/Response/Response.ts:42](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L42)*

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

*Defined in [Library/Response/Response.ts:60](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L60)*

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

*Defined in [Library/Response/Response.ts:48](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L48)*

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

*Defined in [Library/Response/Response.ts:32](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="badgateway"></a>

### `Static` badGateway

**badGateway**(message?: *`string`*, data?: *`any`*, meta?: *`Object`*): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ServerErrorResponse.ts:17](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L17)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:5](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L5)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:25](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L25)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:29](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L29)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:37](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L37)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:9](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L9)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:41](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L41)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:49](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L49)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:45](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L45)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:13](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L13)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:21](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L21)*

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

*Defined in [Library/Response/ServerErrorResponse.ts:33](https://github.com/SpoonX/stix/blob/3f1f30e/src/Library/Response/ServerErrorResponse.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ServerErrorResponse](servererrorresponse)

___

