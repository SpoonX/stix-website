---
title: ContextInterface
id: version-3.0.0-contextinterface
original_id: contextinterface
---

# `Interface` ContextInterface

## Hierarchy

 `Context`

**↳ ContextInterface**

## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Properties

* [URL](contextinterface#url)
* [accept](contextinterface#accept)
* [app](contextinterface#app)
* [assert](contextinterface#assert)
* [body](contextinterface#body)
* [cookies](contextinterface#cookies)
* [etag](contextinterface#etag)
* [fresh](contextinterface#fresh)
* [header](contextinterface#header)
* [headerSent](contextinterface#headersent)
* [headers](contextinterface#headers)
* [host](contextinterface#host)
* [hostname](contextinterface#hostname)
* [href](contextinterface#href)
* [idempotent](contextinterface#idempotent)
* [ip](contextinterface#ip)
* [ips](contextinterface#ips)
* [lastModified](contextinterface#lastmodified)
* [length](contextinterface#length)
* [message](contextinterface#message)
* [method](contextinterface#method)
* [origin](contextinterface#origin)
* [originalUrl](contextinterface#originalurl)
* [path](contextinterface#path)
* [protocol](contextinterface#protocol)
* [query](contextinterface#query)
* [querystring](contextinterface#querystring)
* [req](contextinterface#req)
* [request](contextinterface#request)
* [res](contextinterface#res)
* [respond](contextinterface#respond)
* [response](contextinterface#response)
* [search](contextinterface#search)
* [secure](contextinterface#secure)
* [socket](contextinterface#socket)
* [stale](contextinterface#stale)
* [state](contextinterface#state)
* [status](contextinterface#status)
* [subdomains](contextinterface#subdomains)
* [type](contextinterface#type)
* [url](contextinterface#url-1)
* [writable](contextinterface#writable)

### Methods

* [accepts](contextinterface#accepts)
* [acceptsCharsets](contextinterface#acceptscharsets)
* [acceptsEncodings](contextinterface#acceptsencodings)
* [acceptsLanguages](contextinterface#acceptslanguages)
* [append](contextinterface#append)
* [attachment](contextinterface#attachment)
* [flushHeaders](contextinterface#flushheaders)
* [get](contextinterface#get)
* [inspect](contextinterface#inspect)
* [is](contextinterface#is)
* [onerror](contextinterface#onerror)
* [redirect](contextinterface#redirect)
* [remove](contextinterface#remove)
* [set](contextinterface#set)
* [throw](contextinterface#throw)
* [toJSON](contextinterface#tojson)
* [vary](contextinterface#vary)

---

## Properties

<a id="url"></a>

###  URL

**URL**: *`URL`*

*Inherited from ContextDelegatedRequest.URL*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:105*

Get WHATWG parsed URL object.

___
<a id="accept"></a>

###  accept

**accept**: *`Accepts`*

*Inherited from Context.accept*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:691*

___
<a id="app"></a>

###  app

**app**: *`Application`*

*Inherited from Context.app*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:684*

___
<a id="assert"></a>

###  assert

**assert**: *`assert`*

*Inherited from BaseContext.assert*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:638*

Similar to .throw(), adds assertion.

this.assert(this.user, 401, 'Please login!');

See: [https://github.com/jshttp/http-assert](https://github.com/jshttp/http-assert)

___
<a id="body"></a>

###  body

**body**: *`any`*

*Inherited from ContextDelegatedResponse.body*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:312*

Get/Set response body.

___
<a id="cookies"></a>

###  cookies

**cookies**: *`Cookies`*

*Inherited from Context.cookies*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:690*

___
<a id="etag"></a>

###  etag

**etag**: *`string`*

*Inherited from ContextDelegatedResponse.etag*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:388*

Get/Set the ETag of a response. This will normalize the quotes if necessary.

```
this.response.etag = 'md5hashsum';
this.response.etag = '"md5hashsum"';
this.response.etag = 'W/"123456789"';
```
*__param__*: 

*__api__*: public

___
<a id="fresh"></a>

###  fresh

**fresh**: *`boolean`*

*Inherited from ContextDelegatedRequest.fresh*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:112*

Check if the request is fresh, aka Last-Modified and/or the ETag still match.

___
<a id="header"></a>

###  header

**header**: *`any`*

*Inherited from ContextDelegatedRequest.header*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:35*

Return request header.

___
<a id="headersent"></a>

###  headerSent

**headerSent**: *`boolean`*

*Inherited from ContextDelegatedResponse.headerSent*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:323*

Check if a header has been written to the socket.

___
<a id="headers"></a>

###  headers

**headers**: *`any`*

*Inherited from ContextDelegatedRequest.headers*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:40*

Return request header, alias as request.header

___
<a id="host"></a>

###  host

**host**: *`string`*

*Inherited from ContextDelegatedRequest.host*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:93*

Parse the "Host" header field host and support X-Forwarded-Host when a proxy is enabled.

___
<a id="hostname"></a>

###  hostname

**hostname**: *`string`*

*Inherited from ContextDelegatedRequest.hostname*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:100*

Parse the "Host" header field hostname and support X-Forwarded-Host when a proxy is enabled.

___
<a id="href"></a>

###  href

**href**: *`string`*

*Inherited from ContextDelegatedRequest.href*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:55*

Get full request URL.

___
<a id="idempotent"></a>

###  idempotent

**idempotent**: *`boolean`*

*Inherited from ContextDelegatedRequest.idempotent*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:124*

Check if the request is idempotent.

___
<a id="ip"></a>

###  ip

**ip**: *`string`*

*Inherited from ContextDelegatedRequest.ip*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:151*

Request remote address. Supports X-Forwarded-For when app.proxy is true.

___
<a id="ips"></a>

###  ips

**ips**: *`string`[]*

*Inherited from ContextDelegatedRequest.ips*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:161*

When `app.proxy` is `true`, parse the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2" you would receive the array `["client", "proxy1", "proxy2"]` where "proxy2" is the furthest down-stream.

___
<a id="lastmodified"></a>

###  lastModified

**lastModified**: *`Date`*

*Inherited from ContextDelegatedResponse.lastModified*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:375*

Get the Last-Modified date in Date form, if it exists. Set the Last-Modified date using a string or a Date.

```
this.response.lastModified = new Date();
this.response.lastModified = '2013-09-13';
```

___
<a id="length"></a>

###  length

**length**: *`number`*

*Inherited from ContextDelegatedResponse.length*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:318*

Return parsed response Content-Length when present. Set Content-Length field to `n`.

___
<a id="message"></a>

###  message

**message**: *`string`*

*Inherited from ContextDelegatedResponse.message*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:307*

Get response status message

___
<a id="method"></a>

###  method

**method**: *`string`*

*Inherited from ContextDelegatedRequest.method*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:60*

Get/Set request method.

___
<a id="origin"></a>

###  origin

**origin**: *`string`*

*Inherited from ContextDelegatedRequest.origin*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:50*

Get origin of URL.

___
<a id="originalurl"></a>

###  originalUrl

**originalUrl**: *`string`*

*Inherited from Context.originalUrl*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:689*

___
<a id="path"></a>

###  path

**path**: *`string`*

*Inherited from ContextDelegatedRequest.path*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:66*

Get request pathname. Set pathname, retaining the query-string when present.

___
<a id="protocol"></a>

###  protocol

**protocol**: *`string`*

*Inherited from ContextDelegatedRequest.protocol*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:139*

Return the protocol string "http" or "https" when requested with TLS. When the proxy setting is enabled the "X-Forwarded-Proto" header field will be trusted. If you're running behind a reverse proxy that supplies https for you this may be enabled.

___
<a id="query"></a>

###  query

**query**: *`any`*

*Inherited from ContextDelegatedRequest.query*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:72*

Get parsed query-string. Set query-string as an object.

___
<a id="querystring"></a>

###  querystring

**querystring**: *`string`*

*Inherited from ContextDelegatedRequest.querystring*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:77*

Get/Set query string.

___
<a id="req"></a>

###  req

**req**: *`IncomingMessage`*

*Inherited from Context.req*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:687*

___
<a id="request"></a>

###  request

**request**: *`Request`*

*Inherited from Context.request*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:685*

___
<a id="res"></a>

###  res

**res**: *`ServerResponse`*

*Inherited from Context.res*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:688*

___
<a id="respond"></a>

### `Optional` respond

**respond**: *`boolean`*

*Inherited from Context.respond*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:696*

To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`

___
<a id="response"></a>

###  response

**response**: *`Response`*

*Inherited from Context.response*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:686*

___
<a id="search"></a>

###  search

**search**: *`string`*

*Inherited from ContextDelegatedRequest.search*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:86*

Get the search string. Same as the querystring except it includes the leading ?.

Set the search string. Same as response.querystring= but included for ubiquity.

___
<a id="secure"></a>

###  secure

**secure**: *`boolean`*

*Inherited from ContextDelegatedRequest.secure*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:146*

Short-hand for:

this.protocol == 'https'

___
<a id="socket"></a>

###  socket

**socket**: *`Socket`*

*Inherited from ContextDelegatedRequest.socket*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:129*

Return the request socket.

___
<a id="stale"></a>

###  stale

**stale**: *`boolean`*

*Inherited from ContextDelegatedRequest.stale*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:119*

Check if the request is stale, aka "Last-Modified" and / or the "ETag" for the resource has changed.

___
<a id="state"></a>

###  state

**state**: *`object`*

*Overrides Context.state*

*Defined in [Library/Interface/ContextInterface.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/Library/Interface/ContextInterface.ts#L6)*

#### Type declaration

[key: `string`]: `any`

`Optional`  dispatch: `object`

 action: `string`

 controller: [AbstractActionController](../classes/abstractactioncontroller)

 controllerName: `string`

`Optional`  params: `object`

[key: `string`]: `any`

`Optional`  response: [Response](../classes/response)

___
<a id="status"></a>

###  status

**status**: *`number`*

*Inherited from ContextDelegatedResponse.status*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:302*

Get/Set response status code.

___
<a id="subdomains"></a>

###  subdomains

**subdomains**: *`string`[]*

*Inherited from ContextDelegatedRequest.subdomains*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:175*

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of the app. By default, the domain of the app is assumed to be the last two parts of the host. This can be changed by setting `app.subdomainOffset`.

For example, if the domain is "tobi.ferrets.example.com": If `app.subdomainOffset` is not set, this.subdomains is `["ferrets", "tobi"]`. If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.

___
<a id="type"></a>

###  type

**type**: *`string`*

*Inherited from ContextDelegatedResponse.type*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:366*

Return the response mime type void of parameters such as "charset".

Set Content-Type response header with `type` through `mime.lookup()` when it does not contain a charset.

Examples:

```
this.type = '.html';
this.type = 'html';
this.type = 'json';
this.type = 'application/json';
this.type = 'png';
```

___
<a id="url-1"></a>

###  url

**url**: *`string`*

*Inherited from ContextDelegatedRequest.url*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:45*

Get/Set request URL.

___
<a id="writable"></a>

###  writable

**writable**: *`boolean`*

*Inherited from ContextDelegatedResponse.writable*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:426*

Checks if the request is writable. Tests for the existence of the socket as node sometimes does not set it.

___

## Methods

<a id="accepts"></a>

###  accepts

**accepts**():  `string`[] &#124; `boolean`

**accepts**(...types: *`string`[]*):  `string` &#124; `boolean`

**accepts**(types: *`string`[]*):  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:213*

Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `undefined`, in which case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned.

Examples:

```
// Accept: text/html
this.accepts('html');
// => "html"

// Accept: text/*, application/json
this.accepts('html');
// => "html"
this.accepts('text/html');
// => "text/html"
this.accepts('json', 'text');
// => "json"
this.accepts('application/json');
// => "application/json"

// Accept: text/*, application/json
this.accepts('image/png');
this.accepts('png');
// => undefined

// Accept: text/*;q=.5, application/json
this.accepts(['html', 'json']);
this.accepts('html', 'json');
// => "json"
```

**Returns:**  `string`[] &#124; `boolean`

*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:214*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` types | `string`[] |

**Returns:**  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.accepts*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:215*

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:**  `string` &#124; `boolean`

___
<a id="acceptscharsets"></a>

###  acceptsCharsets

**acceptsCharsets**():  `string`[] &#124; `boolean`

**acceptsCharsets**(...charsets: *`string`[]*):  `string` &#124; `boolean`

**acceptsCharsets**(charsets: *`string`[]*):  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:237*

Return accepted charsets or best fit based on `charsets`.

Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned:

```
['utf-8', 'utf-7', 'iso-8859-1']
```

**Returns:**  `string`[] &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:238*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` charsets | `string`[] |

**Returns:**  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsCharsets*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:239*

**Parameters:**

| Param | Type |
| ------ | ------ |
| charsets | `string`[] |

**Returns:**  `string` &#124; `boolean`

___
<a id="acceptsencodings"></a>

###  acceptsEncodings

**acceptsEncodings**():  `string`[] &#124; `boolean`

**acceptsEncodings**(...encodings: *`string`[]*):  `string` &#124; `boolean`

**acceptsEncodings**(encodings: *`string`[]*):  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:225*

Return accepted encodings or best fit based on `encodings`.

Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned:

```
['gzip', 'deflate']
```

**Returns:**  `string`[] &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:226*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` encodings | `string`[] |

**Returns:**  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsEncodings*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:227*

**Parameters:**

| Param | Type |
| ------ | ------ |
| encodings | `string`[] |

**Returns:**  `string` &#124; `boolean`

___
<a id="acceptslanguages"></a>

###  acceptsLanguages

**acceptsLanguages**():  `string`[] &#124; `boolean`

**acceptsLanguages**(...langs: *`string`[]*):  `string` &#124; `boolean`

**acceptsLanguages**(langs: *`string`[]*):  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:249*

Return accepted languages or best fit based on `langs`.

Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned:

```
['es', 'pt', 'en']
```

**Returns:**  `string`[] &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:250*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` langs | `string`[] |

**Returns:**  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.acceptsLanguages*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:251*

**Parameters:**

| Param | Type |
| ------ | ------ |
| langs | `string`[] |

**Returns:**  `string` &#124; `boolean`

___
<a id="append"></a>

###  append

**append**(field: *`string`*, val: * `string` &#124; `string`[]*): `void`

*Inherited from ContextDelegatedResponse.append*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:414*

Append additional header `field` with value `val`.

Examples:

```
this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
this.append('Warning', '199 Miscellaneous warning');
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| val |  `string` &#124; `string`[]|

**Returns:** `void`

___
<a id="attachment"></a>

###  attachment

**attachment**(filename: *`string`*): `void`

*Inherited from ContextDelegatedResponse.attachment*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:349*

Set Content-Disposition header to "attachment" with optional `filename`.

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `void`

___
<a id="flushheaders"></a>

###  flushHeaders

**flushHeaders**(): `void`

*Inherited from ContextDelegatedResponse.flushHeaders*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:431*

Flush any set headers, and begin the body

**Returns:** `void`

___
<a id="get"></a>

###  get

**get**(field: *`string`*): `string`

*Inherited from ContextDelegatedRequest.get*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:295*

Return request header.

The `Referrer` header field is special-cased, both `Referrer` and `Referer` are interchangeable.

Examples:

```
this.get('Content-Type');
// => "text/plain"

this.get('content-type');
// => "text/plain"

this.get('Something');
// => undefined
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `string`

___
<a id="inspect"></a>

###  inspect

**inspect**(): `any`

*Inherited from BaseContext.inspect*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:619*

util.inspect() implementation, which just returns the JSON output.

**Returns:** `any`

___
<a id="is"></a>

###  is

**is**(...types: *`string`[]*):  `string` &#124; `boolean`

**is**(types: *`string`[]*):  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.is*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:275*

Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime `type`s. If there is no request body, `null` is returned. If there is no content type, `false` is returned. Otherwise, it returns the first `type` that matches.

Examples:

```
// With Content-Type: text/html; charset=utf-8
this.is('html'); // => 'html'
this.is('text/html'); // => 'text/html'
this.is('text/*', 'application/json'); // => 'text/html'

// When Content-Type is application/json
this.is('json', 'urlencoded'); // => 'json'
this.is('application/json'); // => 'application/json'
this.is('html', 'application/*'); // => 'application/json'

this.is('html'); // => false
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` types | `string`[] |

**Returns:**  `string` &#124; `boolean`

*Inherited from ContextDelegatedRequest.is*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:276*

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:**  `string` &#124; `boolean`

___
<a id="onerror"></a>

###  onerror

**onerror**(err: *`Error`*): `void`

*Inherited from BaseContext.onerror*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:661*

Default error handling.

**Parameters:**

| Param | Type |
| ------ | ------ |
| err | `Error` |

**Returns:** `void`

___
<a id="redirect"></a>

###  redirect

**redirect**(url: *`string`*, alt?: *`string`*): `void`

*Inherited from ContextDelegatedResponse.redirect*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:344*

Perform a 302 redirect to `url`.

The string "back" is special-cased to provide Referrer support, when Referrer is not present `alt` or "/" is used.

Examples:

this.redirect('back'); this.redirect('back', '/index.html'); this.redirect('/login'); this.redirect('[http://google.com')](http://google.com'));

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |
| `Optional` alt | `string` |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

**remove**(field: *`string`*): `void`

*Inherited from ContextDelegatedResponse.remove*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:419*

Remove header `field`.

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `void`

___
<a id="set"></a>

###  set

**set**(field: *`object`*): `void`

**set**(field: *`string`*, val: * `string` &#124; `string`[]*): `void`

*Inherited from ContextDelegatedResponse.set*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:400*

Set header `field` to `val`, or pass an object of header fields.

Examples:

this.set('Foo', \['bar', 'baz'\]); this.set('Accept', 'application/json'); this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `object` |

**Returns:** `void`

*Inherited from ContextDelegatedResponse.set*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:401*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| val |  `string` &#124; `string`[]|

**Returns:** `void`

___
<a id="throw"></a>

###  throw

**throw**(message: *`string`*, code?: *`number`*, properties?: *`__type`*): `never`

**throw**(status: *`number`*): `never`

**throw**(...properties: *`Array`< `number` &#124; `string` &#124; `__type`>*): `never`

*Inherited from BaseContext.throw*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:654*

Throw an error with `msg` and optional `status` defaulting to 500. Note that these are user-level errors, and the message may be exposed to the client.

this.throw(403) this.throw('name required', 400) this.throw(400, 'name required') this.throw('something exploded') this.throw(new Error('invalid'), 400); this.throw(400, new Error('invalid'));

See: [https://github.com/jshttp/http-errors](https://github.com/jshttp/http-errors)

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `string` |
| `Optional` code | `number` |
| `Optional` properties | `__type` |

**Returns:** `never`

*Inherited from BaseContext.throw*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:655*

**Parameters:**

| Param | Type |
| ------ | ------ |
| status | `number` |

**Returns:** `never`

*Inherited from BaseContext.throw*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:656*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` properties | `Array`< `number` &#124; `string` &#124; `__type`> |

**Returns:** `never`

___
<a id="tojson"></a>

###  toJSON

**toJSON**(): `any`

*Inherited from BaseContext.toJSON*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:629*

Return JSON representation.

Here we explicitly invoke .toJSON() on each object, as iteration will otherwise fail due to the getters and cause utilities such as clone() to fail.

**Returns:** `any`

___
<a id="vary"></a>

###  vary

**vary**(field: *`string`*): `void`

*Inherited from ContextDelegatedResponse.vary*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/@types/koa/index.d.ts:328*

Vary on `field`.

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `void`

___

