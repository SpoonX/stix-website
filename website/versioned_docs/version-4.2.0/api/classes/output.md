---
title: Output
id: version-4.2.0-output
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
* [success](output#success)
* [create](output#create)
* [errorOutput](output#erroroutput)

---

## Properties

<a id="data"></a>

### `Private` data

**data**: *`any`[]* =  []

*Defined in [Library/Output/Output.ts:9](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L9)*

___
<a id="exitcode"></a>

### `Private` exitCode

**exitCode**: *`number`* = 0

*Defined in [Library/Output/Output.ts:7](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L7)*

___
<a id="prettyerror"></a>

### `Private` prettyError

**prettyError**: *`PrettyError`* =  new PrettyError()

*Defined in [Library/Output/Output.ts:11](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L11)*

___

## Methods

<a id="addcrosstable"></a>

###  addCrossTable

**addCrossTable**(head: *`string`[]*, data: *`object`[]*, options?: *`any`*): `this`

*Defined in [Library/Output/Output.ts:99](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L99)*

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

**addData**(...data: *`any`[]*): `this`

*Defined in [Library/Output/Output.ts:53](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` data | `any`[] |

**Returns:** `this`

___
<a id="addhorizontaltable"></a>

###  addHorizontalTable

**addHorizontalTable**(head: *`string`[]*, data: *`Array`<`string`>[]*, options?: *`any`*): `this`

*Defined in [Library/Output/Output.ts:79](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L79)*

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

*Defined in [Library/Output/Output.ts:89](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L89)*

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

*Defined in [Library/Output/Output.ts:118](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L118)*

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

*Defined in [Library/Output/Output.ts:139](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L139)*

Write the output to the console.

**Returns:** `void`

___
<a id="resetdata"></a>

###  resetData

**resetData**(): `this`

*Defined in [Library/Output/Output.ts:73](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L73)*

**Returns:** `this`

___
<a id="send"></a>

###  send

**send**(): `void`

*Defined in [Library/Output/Output.ts:143](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L143)*

**Returns:** `void`

___
<a id="setexitcode"></a>

###  setExitCode

**setExitCode**(exitCode: *`number`*): `this`

*Defined in [Library/Output/Output.ts:47](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L47)*

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
<a id="success"></a>

###  success

**success**(message: *`string`*, data?: *`any`*): `void`

*Defined in [Library/Output/Output.ts:69](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |
| `Optional` data | `any` |

**Returns:** `void`

___
<a id="create"></a>

### `Static` create

**create**(): [Output](output)

*Defined in [Library/Output/Output.ts:13](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L13)*

**Returns:** [Output](output)

___
<a id="erroroutput"></a>

### `Static` errorOutput

**errorOutput**(error?: * `string` &#124; `Error`*, exitCode?: *`number`*): [Output](output)

*Defined in [Library/Output/Output.ts:17](https://github.com/SpoonX/stix/blob/88d2215/src/Library/Output/Output.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` error |  `string` &#124; `Error`|
| `Optional` exitCode | `number` |

**Returns:** [Output](output)

___

