---
title: Output
id: version-4.1.4-output
original_id: output
---

# `Class` Output

## Hierarchy

**Output**

## Index

### Properties

* [data](output#data)
* [exitCode](output#exitcode)
* [prettyError](output#prettyerror)

### Methods

* [addCrossTable](output#addcrosstable)
* [addData](output#adddata)
* [addHorizontalTable](output#addhorizontaltable)
* [addVerticalTable](output#addverticaltable)
* [error](output#error)
* [flush](output#flush)
* [resetData](output#resetdata)
* [send](output#send)
* [setExitCode](output#setexitcode)
* [create](output#create)
* [errorOutput](output#erroroutput)

---

## Properties

<a id="data"></a>

### `Private` data

**data**: *`any`[]* =  []

*Defined in [Library/Output/Output.ts:8](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L8)*

___
<a id="exitcode"></a>

### `Private` exitCode

**exitCode**: *`number`* = 0

*Defined in [Library/Output/Output.ts:6](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L6)*

___
<a id="prettyerror"></a>

### `Private` prettyError

**prettyError**: *`PrettyError`* =  new PrettyError()

*Defined in [Library/Output/Output.ts:10](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L10)*

___

## Methods

<a id="addcrosstable"></a>

###  addCrossTable

**addCrossTable**(head: *`string`[]*, data: *`object`[]*, options?: *`any`*): `this`

*Defined in [Library/Output/Output.ts:88](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L88)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| head | `string`[] | - |
| data | `object`[] | - |
| `Default value` options | `any` |  {} |

**Returns:** `this`

___
<a id="adddata"></a>

###  addData

**addData**(data: *`any`*): `this`

*Defined in [Library/Output/Output.ts:52](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `this`

___
<a id="addhorizontaltable"></a>

###  addHorizontalTable

**addHorizontalTable**(head: *`string`[]*, data: *`Array`<`string`>[]*, options?: *`any`*): `this`

*Defined in [Library/Output/Output.ts:68](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L68)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| head | `string`[] | - |
| data | `Array`<`string`>[] | - |
| `Default value` options | `any` |  {} |

**Returns:** `this`

___
<a id="addverticaltable"></a>

###  addVerticalTable

**addVerticalTable**(data: *`object`[]*, options?: *`any`*): `this`

*Defined in [Library/Output/Output.ts:78](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `object`[] |
| `Optional` options | `any` |

**Returns:** `this`

___
<a id="error"></a>

###  error

**error**(error?: * `Error` &#124; `string`*, exitCode?: *`number`*, clear?: *`boolean`*): `this`

*Defined in [Library/Output/Output.ts:107](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L107)*

Add/set an error to output.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` error |  `Error` &#124; `string`| &quot;Unknown error&quot; |
| `Default value` exitCode | `number` | 1 |
| `Default value` clear | `boolean` | false |

**Returns:** `this`

___
<a id="flush"></a>

###  flush

**flush**(): `void`

*Defined in [Library/Output/Output.ts:128](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L128)*

Write the output to the console.

**Returns:** `void`

___
<a id="resetdata"></a>

###  resetData

**resetData**(): `this`

*Defined in [Library/Output/Output.ts:62](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L62)*

**Returns:** `this`

___
<a id="send"></a>

###  send

**send**(): `void`

*Defined in [Library/Output/Output.ts:132](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L132)*

**Returns:** `void`

___
<a id="setexitcode"></a>

###  setExitCode

**setExitCode**(exitCode: *`number`*): `this`

*Defined in [Library/Output/Output.ts:46](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L46)*

Exit code to use upon send.

NOTE: Exit codes 1 - 2, 126 - 165, and 255 have special meanings and should therefore be avoided for user-specified exit parameters. Try restricting user-defined exit codes to the range 64 - 113 (in addition to 0, for success).

1 - Catchall for general errors 2 - Misuse of shell builtins (according to Bash documentation) 126 - Command invoked cannot execute 127 - “command not found” 128 - Invalid argument to exit 128+n - Fatal error signal “n” 130 - Script terminated by Control-C 255\* - Exit status out of range
*__see__*: [http://tldp.org/LDP/abs/html/exitcodes.html](http://tldp.org/LDP/abs/html/exitcodes.html)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| exitCode | `number` |   |

**Returns:** `this`

___
<a id="create"></a>

### `Static` create

**create**(): [Output](output)

*Defined in [Library/Output/Output.ts:12](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L12)*

**Returns:** [Output](output)

___
<a id="erroroutput"></a>

### `Static` errorOutput

**errorOutput**(error?: * `string` &#124; `Error`*, exitCode?: *`number`*): [Output](output)

*Defined in [Library/Output/Output.ts:16](https://github.com/SpoonX/stix/blob/14007e3/src/Library/Output/Output.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` error |  `string` &#124; `Error`|
| `Optional` exitCode | `number` |

**Returns:** [Output](output)

___

