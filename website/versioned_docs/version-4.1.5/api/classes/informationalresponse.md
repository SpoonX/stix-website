---
title: InformationalResponse
id: version-4.1.5-informationalresponse
original_id: informationalresponse
---

# `Class` InformationalResponse

## Hierarchy

 [Response](response)

**↳ InformationalResponse**

## Index

### Constructors

* [constructor](informationalresponse#constructor)

### Properties

* [ctx](informationalresponse#ctx)
* [data](informationalresponse#data)
* [headers](informationalresponse#headers)
* [message](informationalresponse#message)
* [meta](informationalresponse#meta)
* [statusCode](informationalresponse#statuscode)

### Methods

* [addHeaders](informationalresponse#addheaders)
* [appendHeader](informationalresponse#appendheader)
* [apply](informationalresponse#apply)
* [applyHeaders](informationalresponse#applyheaders)
* [getStatusCode](informationalresponse#getstatuscode)
* [patchContext](informationalresponse#patchcontext)
* [removeHeader](informationalresponse#removeheader)
* [setBody](informationalresponse#setbody)
* [setHeader](informationalresponse#setheader)
* [setHeaders](informationalresponse#setheaders)
* [setStatusCode](informationalresponse#setstatuscode)
* [continue](informationalresponse#continue)
* [create](informationalresponse#create)
* [processing](informationalresponse#processing)
* [switchingProtocols](informationalresponse#switchingprotocols)

---

## Constructors

<a id="constructor"></a>

### `Protected` constructor

**new InformationalResponse**(__namedParameters: *`object`*): [InformationalResponse](informationalresponse)

*Inherited from [Response](response).[constructor](response#constructor)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L17)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| data | `any` |
| message | `string` |
| meta | `any` |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** [InformationalResponse](informationalresponse)

___

## Properties

<a id="ctx"></a>

### `Protected` ctx

**ctx**: *[ContextInterface](../interfaces/contextinterface)*

*Inherited from [Response](response).[ctx](response#ctx)*

*Defined in [Library/Response/Response.ts:7](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L7)*

___
<a id="data"></a>

### `Protected` data

**data**: *`any`*

*Inherited from [Response](response).[data](response#data)*

*Defined in [Library/Response/Response.ts:15](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L15)*

___
<a id="headers"></a>

### `Protected` headers

**headers**: *`object`*

*Inherited from [Response](response).[headers](response#headers)*

*Defined in [Library/Response/Response.ts:9](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L9)*

#### Type declaration

[header: `string`]:  `string` &#124; `Array`<`string`>

___
<a id="message"></a>

### `Protected` message

**message**: *`string`*

*Inherited from [Response](response).[message](response#message)*

*Defined in [Library/Response/Response.ts:17](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L17)*

___
<a id="meta"></a>

### `Protected` meta

**meta**: *`any`*

*Inherited from [Response](response).[meta](response#meta)*

*Defined in [Library/Response/Response.ts:13](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L13)*

___
<a id="statuscode"></a>

### `Protected` statusCode

**statusCode**: *[HttpStatusCodes](../enums/httpstatuscodes)*

*Inherited from [Response](response).[statusCode](response#statuscode)*

*Defined in [Library/Response/Response.ts:11](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L11)*

___

## Methods

<a id="addheaders"></a>

###  addHeaders

**addHeaders**(headers: *`object`*): `this`

*Inherited from [Response](response).[addHeaders](response#addheaders)*

*Defined in [Library/Response/Response.ts:54](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L54)*

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

*Defined in [Library/Response/Response.ts:66](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L66)*

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

*Defined in [Library/Response/InformationalResponse.ts:21](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/InformationalResponse.ts#L21)*

**Returns:** `void`

___
<a id="applyheaders"></a>

###  applyHeaders

**applyHeaders**(): `this`

*Inherited from [Response](response).[applyHeaders](response#applyheaders)*

*Defined in [Library/Response/Response.ts:76](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L76)*

**Returns:** `this`

___
<a id="getstatuscode"></a>

###  getStatusCode

**getStatusCode**(): [HttpStatusCodes](../enums/httpstatuscodes)

*Inherited from [Response](response).[getStatusCode](response#getstatuscode)*

*Defined in [Library/Response/Response.ts:38](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L38)*

**Returns:** [HttpStatusCodes](../enums/httpstatuscodes)

___
<a id="patchcontext"></a>

###  patchContext

**patchContext**(ctx: *[ContextInterface](../interfaces/contextinterface)*): `void`

*Inherited from [Response](response).[patchContext](response#patchcontext)*

*Defined in [Library/Response/Response.ts:26](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L26)*

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

*Defined in [Library/Response/Response.ts:70](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L70)*

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

*Defined in [Library/Response/Response.ts:42](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L42)*

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

*Defined in [Library/Response/Response.ts:60](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L60)*

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

*Defined in [Library/Response/Response.ts:48](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L48)*

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

*Defined in [Library/Response/Response.ts:32](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/Response.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |

**Returns:** `this`

___
<a id="continue"></a>

### `Static` continue

**continue**(meta?: *`any`*): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/InformationalResponse.ts:9](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/InformationalResponse.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | `any` |

**Returns:** [InformationalResponse](informationalresponse)

___
<a id="create"></a>

### `Static` create

**create**(statusCode: *[HttpStatusCodes](../enums/httpstatuscodes)*, meta?: *`any`*): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/InformationalResponse.ts:5](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/InformationalResponse.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCode | [HttpStatusCodes](../enums/httpstatuscodes) |
| `Optional` meta | `any` |

**Returns:** [InformationalResponse](informationalresponse)

___
<a id="processing"></a>

### `Static` processing

**processing**(meta?: *`any`*): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/InformationalResponse.ts:17](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/InformationalResponse.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | `any` |

**Returns:** [InformationalResponse](informationalresponse)

___
<a id="switchingprotocols"></a>

### `Static` switchingProtocols

**switchingProtocols**(meta?: *`any`*): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/InformationalResponse.ts:13](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Response/InformationalResponse.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | `any` |

**Returns:** [InformationalResponse](informationalresponse)

___

