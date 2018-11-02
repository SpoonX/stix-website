---
title: ResponseService
id: version-1.0.1-responseservice
original_id: responseservice
---

# `Class` ResponseService

## Hierarchy

**ResponseService**

## Index

### Constructors

* [constructor](responseservice#constructor)

### Properties

* [config](responseservice#config)

### Methods

* [clientError](responseservice#clienterror)
* [informational](responseservice#informational)
* [redirection](responseservice#redirection)
* [serverError](responseservice#servererror)
* [successful](responseservice#successful)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ResponseService**(config: *[ResponseConfigInterface](../interfaces/responseconfiginterface)*): [ResponseService](responseservice)

*Defined in [Library/Response/ResponseService.ts:9](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ResponseConfigInterface](../interfaces/responseconfiginterface) |

**Returns:** [ResponseService](responseservice)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[ResponseConfigInterface](../interfaces/responseconfiginterface)*

*Defined in [Library/Response/ResponseService.ts:9](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L9)*

___

## Methods

<a id="clienterror"></a>

###  clientError

**clientError**(): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ResponseService.ts:27](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L27)*

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="informational"></a>

###  informational

**informational**(): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/ResponseService.ts:15](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L15)*

**Returns:** [InformationalResponse](informationalresponse)

___
<a id="redirection"></a>

###  redirection

**redirection**(): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/ResponseService.ts:19](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L19)*

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="servererror"></a>

###  serverError

**serverError**(): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ResponseService.ts:23](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L23)*

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="successful"></a>

###  successful

**successful**(): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/ResponseService.ts:31](https://github.com/SpoonX/stix/blob/573086e/src/Library/Response/ResponseService.ts#L31)*

**Returns:** [SuccessfulResponse](successfulresponse)

___

