---
title: HttpStatusCodes
id: version-4.1.3-httpstatuscodes
original_id: httpstatuscodes
---

# `Enumeration` HttpStatusCodes

Hypertext Transfer Protocol (HTTP) response status codes.
*__see__*: [https://en.wikipedia.org/wiki/List\_of\_HTTP\_status\_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Index

### Enumeration members

* [Accepted](httpstatuscodes#accepted)
* [AlreadyReported](httpstatuscodes#alreadyreported)
* [BadGateway](httpstatuscodes#badgateway)
* [BadRequest](httpstatuscodes#badrequest)
* [Conflict](httpstatuscodes#conflict)
* [Continue](httpstatuscodes#continue)
* [Created](httpstatuscodes#created)
* [ExpectationFailed](httpstatuscodes#expectationfailed)
* [FailedDependency](httpstatuscodes#faileddependency)
* [Forbidden](httpstatuscodes#forbidden)
* [Found](httpstatuscodes#found)
* [GatewayTimeout](httpstatuscodes#gatewaytimeout)
* [Gone](httpstatuscodes#gone)
* [HttpVersionNotSupported](httpstatuscodes#httpversionnotsupported)
* [IAmATeapot](httpstatuscodes#iamateapot)
* [ImUsed](httpstatuscodes#imused)
* [InsufficientStorage](httpstatuscodes#insufficientstorage)
* [InternalServerError](httpstatuscodes#internalservererror)
* [LengthRequired](httpstatuscodes#lengthrequired)
* [Locked](httpstatuscodes#locked)
* [LoopDetected](httpstatuscodes#loopdetected)
* [MethodNotAllowed](httpstatuscodes#methodnotallowed)
* [MisdirectedRequest](httpstatuscodes#misdirectedrequest)
* [MovedPermanently](httpstatuscodes#movedpermanently)
* [MultiStatus](httpstatuscodes#multistatus)
* [MultipleChoices](httpstatuscodes#multiplechoices)
* [NetworkAuthenticationRequired](httpstatuscodes#networkauthenticationrequired)
* [NoContent](httpstatuscodes#nocontent)
* [NonAuthoritativeInformation](httpstatuscodes#nonauthoritativeinformation)
* [NotAcceptable](httpstatuscodes#notacceptable)
* [NotExtended](httpstatuscodes#notextended)
* [NotFound](httpstatuscodes#notfound)
* [NotImplemented](httpstatuscodes#notimplemented)
* [NotModified](httpstatuscodes#notmodified)
* [Ok](httpstatuscodes#ok)
* [PartialContent](httpstatuscodes#partialcontent)
* [PayloadTooLarge](httpstatuscodes#payloadtoolarge)
* [PaymentRequired](httpstatuscodes#paymentrequired)
* [PermanentRedirect](httpstatuscodes#permanentredirect)
* [PreconditionFailed](httpstatuscodes#preconditionfailed)
* [PreconditionRequired](httpstatuscodes#preconditionrequired)
* [Processing](httpstatuscodes#processing)
* [ProxyAuthenticationRequired](httpstatuscodes#proxyauthenticationrequired)
* [RangeNotSatisfiable](httpstatuscodes#rangenotsatisfiable)
* [RequestHeaderFieldsTooLarge](httpstatuscodes#requestheaderfieldstoolarge)
* [RequestTimeout](httpstatuscodes#requesttimeout)
* [ResetContent](httpstatuscodes#resetcontent)
* [SeeOther](httpstatuscodes#seeother)
* [ServiceUnavailable](httpstatuscodes#serviceunavailable)
* [SwitchProxy](httpstatuscodes#switchproxy)
* [SwitchingProtocols](httpstatuscodes#switchingprotocols)
* [TemporaryRedirect](httpstatuscodes#temporaryredirect)
* [TooManyRequests](httpstatuscodes#toomanyrequests)
* [Unauthorized](httpstatuscodes#unauthorized)
* [UnavailableForLegalReasons](httpstatuscodes#unavailableforlegalreasons)
* [UnprocessableEntity](httpstatuscodes#unprocessableentity)
* [UnsupportedMediaType](httpstatuscodes#unsupportedmediatype)
* [UpgradeRequired](httpstatuscodes#upgraderequired)
* [UriTooLong](httpstatuscodes#uritoolong)
* [UseProxy](httpstatuscodes#useproxy)
* [VariantAlsoNegotiates](httpstatuscodes#variantalsonegotiates)

---

## Enumeration members

<a id="accepted"></a>

###  Accepted

**Accepted**:  = 202

*Defined in [Library/Server/HttpStatusCodes.ts:46](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L46)*

The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.

___
<a id="alreadyreported"></a>

###  AlreadyReported

**AlreadyReported**:  = 208

*Defined in [Library/Server/HttpStatusCodes.ts:83](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L83)*

The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.

___
<a id="badgateway"></a>

###  BadGateway

**BadGateway**:  = 502

*Defined in [Library/Server/HttpStatusCodes.ts:336](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L336)*

The server was acting as a gateway or proxy and received an invalid response from the upstream server.

___
<a id="badrequest"></a>

###  BadRequest

**BadRequest**:  = 400

*Defined in [Library/Server/HttpStatusCodes.ts:158](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L158)*

The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).

___
<a id="conflict"></a>

###  Conflict

**Conflict**:  = 409

*Defined in [Library/Server/HttpStatusCodes.ts:214](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L214)*

Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.

___
<a id="continue"></a>

###  Continue

**Continue**:  = 100

*Defined in [Library/Server/HttpStatusCodes.ts:15](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L15)*

The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.

___
<a id="created"></a>

###  Created

**Created**:  = 201

*Defined in [Library/Server/HttpStatusCodes.ts:40](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L40)*

The request has been fulfilled, resulting in the creation of a new resource.

___
<a id="expectationfailed"></a>

###  ExpectationFailed

**ExpectationFailed**:  = 417

*Defined in [Library/Server/HttpStatusCodes.ts:263](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L263)*

The server cannot meet the requirements of the Expect request-header field.

___
<a id="faileddependency"></a>

###  FailedDependency

**FailedDependency**:  = 424

*Defined in [Library/Server/HttpStatusCodes.ts:290](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L290)*

The request failed due to failure of a previous request (e.g., a PROPPATCH).

___
<a id="forbidden"></a>

###  Forbidden

**Forbidden**:  = 403

*Defined in [Library/Server/HttpStatusCodes.ts:179](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L179)*

The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.

___
<a id="found"></a>

###  Found

**Found**:  = 302

*Defined in [Library/Server/HttpStatusCodes.ts:111](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L111)*

This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.

___
<a id="gatewaytimeout"></a>

###  GatewayTimeout

**GatewayTimeout**:  = 504

*Defined in [Library/Server/HttpStatusCodes.ts:347](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L347)*

The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

___
<a id="gone"></a>

###  Gone

**Gone**:  = 410

*Defined in [Library/Server/HttpStatusCodes.ts:223](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L223)*

Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.

___
<a id="httpversionnotsupported"></a>

###  HttpVersionNotSupported

**HttpVersionNotSupported**:  = 505

*Defined in [Library/Server/HttpStatusCodes.ts:352](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L352)*

The server does not support the HTTP protocol version used in the request

___
<a id="iamateapot"></a>

###  IAmATeapot

**IAmATeapot**:  = 418

*Defined in [Library/Server/HttpStatusCodes.ts:270](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L270)*

This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.

___
<a id="imused"></a>

###  ImUsed

**ImUsed**:  = 226

*Defined in [Library/Server/HttpStatusCodes.ts:89](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L89)*

The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

___
<a id="insufficientstorage"></a>

###  InsufficientStorage

**InsufficientStorage**:  = 507

*Defined in [Library/Server/HttpStatusCodes.ts:362](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L362)*

The server is unable to store the representation needed to complete the request.

___
<a id="internalservererror"></a>

###  InternalServerError

**InternalServerError**:  = 500

*Defined in [Library/Server/HttpStatusCodes.ts:325](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L325)*

A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

___
<a id="lengthrequired"></a>

###  LengthRequired

**LengthRequired**:  = 411

*Defined in [Library/Server/HttpStatusCodes.ts:228](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L228)*

The request did not specify the length of its content, which is required by the requested resource.

___
<a id="locked"></a>

###  Locked

**Locked**:  = 423

*Defined in [Library/Server/HttpStatusCodes.ts:285](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L285)*

The resource that is being accessed is locked.

___
<a id="loopdetected"></a>

###  LoopDetected

**LoopDetected**:  = 508

*Defined in [Library/Server/HttpStatusCodes.ts:367](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L367)*

The server detected an infinite loop while processing the request.

___
<a id="methodnotallowed"></a>

###  MethodNotAllowed

**MethodNotAllowed**:  = 405

*Defined in [Library/Server/HttpStatusCodes.ts:191](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L191)*

A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.

___
<a id="misdirectedrequest"></a>

###  MisdirectedRequest

**MisdirectedRequest**:  = 421

*Defined in [Library/Server/HttpStatusCodes.ts:275](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L275)*

The request was directed at a server that is not able to produce a response (for example because a connection reuse).

___
<a id="movedpermanently"></a>

###  MovedPermanently

**MovedPermanently**:  = 301

*Defined in [Library/Server/HttpStatusCodes.ts:101](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L101)*

This and all future requests should be directed to the given URI.

___
<a id="multistatus"></a>

###  MultiStatus

**MultiStatus**:  = 207

*Defined in [Library/Server/HttpStatusCodes.ts:77](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L77)*

The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.

___
<a id="multiplechoices"></a>

###  MultipleChoices

**MultipleChoices**:  = 300

*Defined in [Library/Server/HttpStatusCodes.ts:96](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L96)*

Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation.

___
<a id="networkauthenticationrequired"></a>

###  NetworkAuthenticationRequired

**NetworkAuthenticationRequired**:  = 511

*Defined in [Library/Server/HttpStatusCodes.ts:379](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L379)*

The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).

___
<a id="nocontent"></a>

###  NoContent

**NoContent**:  = 204

*Defined in [Library/Server/HttpStatusCodes.ts:58](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L58)*

The server successfully processed the request and is not returning any content.

___
<a id="nonauthoritativeinformation"></a>

###  NonAuthoritativeInformation

**NonAuthoritativeInformation**:  = 203

*Defined in [Library/Server/HttpStatusCodes.ts:53](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L53)*

SINCE HTTP/1.1 The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.

___
<a id="notacceptable"></a>

###  NotAcceptable

**NotAcceptable**:  = 406

*Defined in [Library/Server/HttpStatusCodes.ts:196](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L196)*

The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.

___
<a id="notextended"></a>

###  NotExtended

**NotExtended**:  = 510

*Defined in [Library/Server/HttpStatusCodes.ts:372](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L372)*

Further extensions to the request are required for the server to fulfill it.

___
<a id="notfound"></a>

###  NotFound

**NotFound**:  = 404

*Defined in [Library/Server/HttpStatusCodes.ts:185](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L185)*

The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.

___
<a id="notimplemented"></a>

###  NotImplemented

**NotImplemented**:  = 501

*Defined in [Library/Server/HttpStatusCodes.ts:331](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L331)*

The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).

___
<a id="notmodified"></a>

###  NotModified

**NotModified**:  = 304

*Defined in [Library/Server/HttpStatusCodes.ts:125](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L125)*

Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.

___
<a id="ok"></a>

###  Ok

**Ok**:  = 200

*Defined in [Library/Server/HttpStatusCodes.ts:35](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L35)*

Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.

___
<a id="partialcontent"></a>

###  PartialContent

**PartialContent**:  = 206

*Defined in [Library/Server/HttpStatusCodes.ts:71](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L71)*

The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.

___
<a id="payloadtoolarge"></a>

###  PayloadTooLarge

**PayloadTooLarge**:  = 413

*Defined in [Library/Server/HttpStatusCodes.ts:238](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L238)*

The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".

___
<a id="paymentrequired"></a>

###  PaymentRequired

**PaymentRequired**:  = 402

*Defined in [Library/Server/HttpStatusCodes.ts:173](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L173)*

Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micro payment scheme, but that has not happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.

___
<a id="permanentredirect"></a>

###  PermanentRedirect

**PermanentRedirect**:  = 308

*Defined in [Library/Server/HttpStatusCodes.ts:152](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L152)*

The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.

___
<a id="preconditionfailed"></a>

###  PreconditionFailed

**PreconditionFailed**:  = 412

*Defined in [Library/Server/HttpStatusCodes.ts:233](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L233)*

The server does not meet one of the preconditions that the requester put on the request.

___
<a id="preconditionrequired"></a>

###  PreconditionRequired

**PreconditionRequired**:  = 428

*Defined in [Library/Server/HttpStatusCodes.ts:303](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L303)*

The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."

___
<a id="processing"></a>

###  Processing

**Processing**:  = 102

*Defined in [Library/Server/HttpStatusCodes.ts:27](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L27)*

A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.

___
<a id="proxyauthenticationrequired"></a>

###  ProxyAuthenticationRequired

**ProxyAuthenticationRequired**:  = 407

*Defined in [Library/Server/HttpStatusCodes.ts:201](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L201)*

The client must first authenticate itself with the proxy.

___
<a id="rangenotsatisfiable"></a>

###  RangeNotSatisfiable

**RangeNotSatisfiable**:  = 416

*Defined in [Library/Server/HttpStatusCodes.ts:258](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L258)*

The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously.

___
<a id="requestheaderfieldstoolarge"></a>

###  RequestHeaderFieldsTooLarge

**RequestHeaderFieldsTooLarge**:  = 431

*Defined in [Library/Server/HttpStatusCodes.ts:314](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L314)*

The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.

___
<a id="requesttimeout"></a>

###  RequestTimeout

**RequestTimeout**:  = 408

*Defined in [Library/Server/HttpStatusCodes.ts:208](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L208)*

The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."

___
<a id="resetcontent"></a>

###  ResetContent

**ResetContent**:  = 205

*Defined in [Library/Server/HttpStatusCodes.ts:64](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L64)*

The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.

___
<a id="seeother"></a>

###  SeeOther

**SeeOther**:  = 303

*Defined in [Library/Server/HttpStatusCodes.ts:119](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L119)*

SINCE HTTP/1.1 The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a redirect with a separate GET message.

___
<a id="serviceunavailable"></a>

###  ServiceUnavailable

**ServiceUnavailable**:  = 503

*Defined in [Library/Server/HttpStatusCodes.ts:342](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L342)*

The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

___
<a id="switchproxy"></a>

###  SwitchProxy

**SwitchProxy**:  = 306

*Defined in [Library/Server/HttpStatusCodes.ts:137](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L137)*

No longer used. Originally meant "Subsequent requests should use the specified proxy."

___
<a id="switchingprotocols"></a>

###  SwitchingProtocols

**SwitchingProtocols**:  = 101

*Defined in [Library/Server/HttpStatusCodes.ts:20](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L20)*

The requester has asked the server to switch protocols and the server has agreed to do so.

___
<a id="temporaryredirect"></a>

###  TemporaryRedirect

**TemporaryRedirect**:  = 307

*Defined in [Library/Server/HttpStatusCodes.ts:145](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L145)*

SINCE HTTP/1.1 In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.

___
<a id="toomanyrequests"></a>

###  TooManyRequests

**TooManyRequests**:  = 429

*Defined in [Library/Server/HttpStatusCodes.ts:308](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L308)*

The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.

___
<a id="unauthorized"></a>

###  Unauthorized

**Unauthorized**:  = 401

*Defined in [Library/Server/HttpStatusCodes.ts:166](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L166)*

Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means "unauthenticated",i.e. the user does not have the necessary credentials.

___
<a id="unavailableforlegalreasons"></a>

###  UnavailableForLegalReasons

**UnavailableForLegalReasons**:  = 451

*Defined in [Library/Server/HttpStatusCodes.ts:320](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L320)*

A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.

___
<a id="unprocessableentity"></a>

###  UnprocessableEntity

**UnprocessableEntity**:  = 422

*Defined in [Library/Server/HttpStatusCodes.ts:280](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L280)*

The request was well-formed but was unable to be followed due to semantic errors.

___
<a id="unsupportedmediatype"></a>

###  UnsupportedMediaType

**UnsupportedMediaType**:  = 415

*Defined in [Library/Server/HttpStatusCodes.ts:251](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L251)*

The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.

___
<a id="upgraderequired"></a>

###  UpgradeRequired

**UpgradeRequired**:  = 426

*Defined in [Library/Server/HttpStatusCodes.ts:295](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L295)*

The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.

___
<a id="uritoolong"></a>

###  UriTooLong

**UriTooLong**:  = 414

*Defined in [Library/Server/HttpStatusCodes.ts:245](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L245)*

The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.

___
<a id="useproxy"></a>

###  UseProxy

**UseProxy**:  = 305

*Defined in [Library/Server/HttpStatusCodes.ts:132](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L132)*

SINCE HTTP/1.1 The requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.

___
<a id="variantalsonegotiates"></a>

###  VariantAlsoNegotiates

**VariantAlsoNegotiates**:  = 506

*Defined in [Library/Server/HttpStatusCodes.ts:357](https://github.com/SpoonX/stix/blob/4716f47/src/Library/Server/HttpStatusCodes.ts#L357)*

Transparent content negotiation for the request results in a circular reference.

___

