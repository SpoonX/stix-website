---
title: LoggerService
id: version-4.1.5-loggerservice
original_id: loggerservice
---

# `Class` LoggerService

## Hierarchy

**LoggerService**

## Index

### Constructors

* [constructor](loggerservice#constructor)

### Properties

* [adapter](loggerservice#adapter)

### Methods

* [alert](loggerservice#alert)
* [crit](loggerservice#crit)
* [data](loggerservice#data)
* [debug](loggerservice#debug)
* [emerg](loggerservice#emerg)
* [error](loggerservice#error)
* [getAdapter](loggerservice#getadapter)
* [help](loggerservice#help)
* [http](loggerservice#http)
* [info](loggerservice#info)
* [input](loggerservice#input)
* [log](loggerservice#log)
* [notice](loggerservice#notice)
* [prompt](loggerservice#prompt)
* [silly](loggerservice#silly)
* [verbose](loggerservice#verbose)
* [warn](loggerservice#warn)
* [warning](loggerservice#warning)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new LoggerService**(config: *[LoggerConfigInterface](../interfaces/loggerconfiginterface)*): [LoggerService](loggerservice)

*Defined in [Library/Logger/LoggerService.ts:6](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [LoggerConfigInterface](../interfaces/loggerconfiginterface) |

**Returns:** [LoggerService](loggerservice)

___

## Properties

<a id="adapter"></a>

### `Private` adapter

**adapter**: *`WinstonLogger`*

*Defined in [Library/Logger/LoggerService.ts:6](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L6)*

___

## Methods

<a id="alert"></a>

###  alert

**alert**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:70](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="crit"></a>

###  crit

**crit**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:74](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="data"></a>

###  data

**data**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:34](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="debug"></a>

###  debug

**debug**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:42](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="emerg"></a>

###  emerg

**emerg**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:66](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="error"></a>

###  error

**error**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:22](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="getadapter"></a>

###  getAdapter

**getAdapter**(): `WinstonLogger`

*Defined in [Library/Logger/LoggerService.ts:12](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L12)*

**Returns:** `WinstonLogger`

___
<a id="help"></a>

###  help

**help**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:30](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="http"></a>

###  http

**http**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:50](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="info"></a>

###  info

**info**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:38](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="input"></a>

###  input

**input**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:58](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="log"></a>

###  log

**log**(level: * `string` &#124; `any`*, message?: *`any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:16](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| level |  `string` &#124; `any`|
| `Optional` message | `any` |
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="notice"></a>

###  notice

**notice**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:82](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="prompt"></a>

###  prompt

**prompt**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:46](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="silly"></a>

###  silly

**silly**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:62](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="verbose"></a>

###  verbose

**verbose**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:54](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="warn"></a>

###  warn

**warn**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:26](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___
<a id="warning"></a>

###  warning

**warning**(message: * `string` &#124; `any`*, ...logArguments: *`any`[]*): `this`

*Defined in [Library/Logger/LoggerService.ts:78](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Logger/LoggerService.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message |  `string` &#124; `any`|
| `Rest` logArguments | `any`[] |

**Returns:** `this`

___

