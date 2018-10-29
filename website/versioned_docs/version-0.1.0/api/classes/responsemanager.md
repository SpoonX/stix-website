---
title: ResponseManager
id: version-0.1.0-responsemanager
original_id: responsemanager
---

# `Class` ResponseManager

## Hierarchy

**ResponseManager**

## Index

### Constructors

* [constructor](responsemanager#constructor)

### Properties

* [config](responsemanager#config)

### Methods

* [clientError](responsemanager#clienterror)
* [informational](responsemanager#informational)
* [redirection](responsemanager#redirection)
* [serverError](responsemanager#servererror)
* [successful](responsemanager#successful)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ResponseManager**(config: *[ResponseConfigInterface](../interfaces/responseconfiginterface)*): [ResponseManager](responsemanager)

*Defined in [Library/Response/ResponseManager.ts:9](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [ResponseConfigInterface](../interfaces/responseconfiginterface) |

**Returns:** [ResponseManager](responsemanager)

___

## Properties

<a id="config"></a>

### `Private` config

**config**: *[ResponseConfigInterface](../interfaces/responseconfiginterface)*

*Defined in [Library/Response/ResponseManager.ts:9](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L9)*

___

## Methods

<a id="clienterror"></a>

###  clientError

**clientError**(): [ClientErrorResponse](clienterrorresponse)

*Defined in [Library/Response/ResponseManager.ts:27](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L27)*

**Returns:** [ClientErrorResponse](clienterrorresponse)

___
<a id="informational"></a>

###  informational

**informational**(): [InformationalResponse](informationalresponse)

*Defined in [Library/Response/ResponseManager.ts:15](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L15)*

**Returns:** [InformationalResponse](informationalresponse)

___
<a id="redirection"></a>

###  redirection

**redirection**(): [RedirectionResponse](redirectionresponse)

*Defined in [Library/Response/ResponseManager.ts:19](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L19)*

**Returns:** [RedirectionResponse](redirectionresponse)

___
<a id="servererror"></a>

###  serverError

**serverError**(): [ServerErrorResponse](servererrorresponse)

*Defined in [Library/Response/ResponseManager.ts:23](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L23)*

**Returns:** [ServerErrorResponse](servererrorresponse)

___
<a id="successful"></a>

###  successful

**successful**(): [SuccessfulResponse](successfulresponse)

*Defined in [Library/Response/ResponseManager.ts:31](https://github.com/SpoonX/stix/blob/60b6862/src/Library/Response/ResponseManager.ts#L31)*

**Returns:** [SuccessfulResponse](successfulresponse)

___

