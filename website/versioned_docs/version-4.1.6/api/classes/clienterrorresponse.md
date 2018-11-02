---
title: ClientErrorResponse
id: version-4.1.6-clienterrorresponse
original_id: clienterrorresponse
---

# `Class` ClientErrorResponse

## Hierarchy

 [Response](response)

**↳ ClientErrorResponse**

## Index

### Constructors

* [constructor](clienterrorresponse#constructor)

### Properties

* [ctx](clienterrorresponse#ctx)
* [data](clienterrorresponse#data)
* [headers](clienterrorresponse#headers)
* [message](clienterrorresponse#message)
* [meta](clienterrorresponse#meta)
* [statusCode](clienterrorresponse#statuscode)

### Methods

* [addHeaders](clienterrorresponse#addheaders)
* [appendHeader](clienterrorresponse#appendheader)
* [apply](clienterrorresponse#apply)
* [applyHeaders](clienterrorresponse#applyheaders)
* [getStatusCode](clienterrorresponse#getstatuscode)
* [patchContext](clienterrorresponse#patchcontext)
* [removeHeader](clienterrorresponse#removeheader)
* [setBody](clienterrorresponse#setbody)
* [setHeader](clienterrorresponse#setheader)
* [setHeaders](clienterrorresponse#setheaders)
* [setStatusCode](clienterrorresponse#setstatuscode)
* [badRequest](clienterrorresponse#badrequest)
* [conflict](clienterrorresponse#conflict)
* [create](clienterrorresponse#create)
* [expectationFailed](clienterrorresponse#expectationfailed)
* [failedDependency](clienterrorresponse#faileddependency)
* [forbidden](clienterrorresponse#forbidden)
* [gone](clienterrorresponse#gone)
* [iAmATeapot](clienterrorresponse#iamateapot)
* [lengthRequired](clienterrorresponse#lengthrequired)
* [locked](clienterrorresponse#locked)
* [methodNotAllowed](clienterrorresponse#methodnotallowed)
* [misdirectedRequest](clienterrorresponse#misdirectedrequest)
* [notAcceptable](clienterrorresponse#notacceptable)
* [notFound](clienterrorresponse#notfound)
* [payloadTooLarge](clienterrorresponse#payloadtoolarge)
* [paymentRequired](clienterrorresponse#paymentrequired)
* [preconditionFailed](clienterrorresponse#preconditionfailed)
* [preconditionRequired](clienterrorresponse#preconditionrequired)
* [proxyAuthenticationRequired](clienterrorresponse#proxyauthenticationrequired)
* [rangeNotSatisfiable](clienterrorresponse#rangenotsatisfiable)
* [requestHeaderFieldsTooLarge](clienterrorresponse#requestheaderfieldstoolarge)
* [requestTimeout](clienterrorresponse#requesttimeout)
* [tooManyRequests](clienterrorresponse#toomanyrequests)
* [unauthorized](clienterrorresponse#unauthorized)
* [unavailableForLegalReasons](clienterrorresponse#unavailableforlegalreasons)
* [unprocessableEntity](clienterrorresponse#unprocessableentity)
* [unsupportedMediaType](clienterrorresponse#unsupportedmediatype)
* [upgradeRequired](clienterrorresponse#upgraderequired)
* [uriTooLong](clienterrorresponse#uritoolong)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new ClientErrorResponse**(__namedParameters: *`object`*): [ClientErrorResponse](clienterrorresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L17)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Inherited from [Response](response).[ctx](response#ctx)*

*Defined in [Library/Response/Response.ts:7](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:15](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:9](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:13](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:11](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:54](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L54)*

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

*Defined in [Library/Response/Response.ts:66](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L66)*

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

*Defined in [Library/Response/ClientErrorResponse.ts:121](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L121)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:76](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:38](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Inherited from [Response](response).[patchContext](response#patchcontext)*

*Defined in [Library/Response/Response.ts:26](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L26)*

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

*Defined in [Library/Response/Response.ts:70](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L70)*

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

*Defined in [Library/Response/Response.ts:42](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L42)*

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

*Defined in [Library/Response/Response.ts:60](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L60)*

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

*Defined in [Library/Response/Response.ts:48](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L48)*

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

*Defined in [Library/Response/Response.ts:32](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="badrequest"></a>

### `Static` badRequest

**badRequest**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:9](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="conflict"></a>

### `Static` conflict

**conflict**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:45](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:5](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="expectationfailed"></a>

### `Static` expectationFailed

**expectationFailed**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:77](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="faileddependency"></a>

### `Static` failedDependency

**failedDependency**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:97](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="forbidden"></a>

### `Static` forbidden

**forbidden**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:21](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="gone"></a>

### `Static` gone

**gone**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:49](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="iamateapot"></a>

### `Static` iAmATeapot

**iAmATeapot**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:81](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="lengthrequired"></a>

### `Static` lengthRequired

**lengthRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:53](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="locked"></a>

### `Static` locked

**locked**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:93](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="methodnotallowed"></a>

### `Static` methodNotAllowed

**methodNotAllowed**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:29](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="misdirectedrequest"></a>

### `Static` misdirectedRequest

**misdirectedRequest**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:85](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="notacceptable"></a>

### `Static` notAcceptable

**notAcceptable**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:33](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="notfound"></a>

### `Static` notFound

**notFound**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:25](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="payloadtoolarge"></a>

### `Static` payloadTooLarge

**payloadTooLarge**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:61](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="paymentrequired"></a>

### `Static` paymentRequired

**paymentRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:17](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="preconditionfailed"></a>

### `Static` preconditionFailed

**preconditionFailed**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:57](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="preconditionrequired"></a>

### `Static` preconditionRequired

**preconditionRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:105](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="proxyauthenticationrequired"></a>

### `Static` proxyAuthenticationRequired

**proxyAuthenticationRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:37](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="rangenotsatisfiable"></a>

### `Static` rangeNotSatisfiable

**rangeNotSatisfiable**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:73](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="requestheaderfieldstoolarge"></a>

### `Static` requestHeaderFieldsTooLarge

**requestHeaderFieldsTooLarge**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:113](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="requesttimeout"></a>

### `Static` requestTimeout

**requestTimeout**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:41](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="toomanyrequests"></a>

### `Static` tooManyRequests

**tooManyRequests**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:109](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unauthorized"></a>

### `Static` unauthorized

**unauthorized**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:13](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unavailableforlegalreasons"></a>

### `Static` unavailableForLegalReasons

**unavailableForLegalReasons**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:117](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L117)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unprocessableentity"></a>

### `Static` unprocessableEntity

**unprocessableEntity**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:89](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="unsupportedmediatype"></a>

### `Static` unsupportedMediaType

**unsupportedMediaType**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:69](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="upgraderequired"></a>

### `Static` upgradeRequired

**upgradeRequired**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:101](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L101)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="uritoolong"></a>

### `Static` uriTooLong

**uriTooLong**(message?: *`string`*, data?: *`any`*, meta?: *`any`*): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ClientErrorResponse.ts:65](https://github.com/SpoonX/stix/blob/03c715f/src/Library/Response/ClientErrorResponse.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` data | `any` |
| `Optional` meta | `any` |

**Returns:** [ClientErrorResponse](clienterrorresponse)

___

