---
title: CliService
id: version-4.0.1-cliservice
original_id: cliservice
---

# `Class` CliService

## Hierarchy

**CliService**

## Index

### Constructors

* [constructor](cliservice#constructor)

### Properties

* [commandManager](cliservice#commandmanager)
* [commands](cliservice#commands)
* [config](cliservice#config)
* [programs](cliservice#programs)

### Methods

* [collectAliases](cliservice#collectaliases)
* [execute](cliservice#execute)
* [getCommand](cliservice#getcommand)
* [getCommands](cliservice#getcommands)
* [getConfig](cliservice#getconfig)
* [getPrograms](cliservice#getprograms)
* [queParser](cliservice#queparser)
* [registerProgram](cliservice#registerprogram)
* [registerPrograms](cliservice#registerprograms)
* [resolve](cliservice#resolve)
* [resolveToken](cliservice#resolvetoken)
* [validate](cliservice#validate)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new CliService**(commandManager: *[CommandManager](commandmanager)*, config?: *[CliConfigType](../modules/cliconfigtype#cliconfigtype)*): [CliService](cliservice)

*Defined in [Library/Cli/CliService.ts:23](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| commandManager | [CommandManager](commandmanager) | - |
| `Default value` config | [CliConfigType](../modules/cliconfigtype#cliconfigtype) |  {} |

**Returns:** [CliService](cliservice)

___

## Properties

<a id="commandmanager"></a>

### `Private` commandManager

**commandManager**: *[CommandManager](commandmanager)*

*Defined in [Library/Cli/CliService.ts:23](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L23)*

___
<a id="commands"></a>

### `Private` commands

**commands**: *`object`*

*Defined in [Library/Cli/CliService.ts:21](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L21)*

Lookup index linking to commands in programs.

#### Type declaration

[token: `string`]: [CliCommandType](../modules/clitypes#clicommandtype)

___
<a id="config"></a>

### `Private` config

**config**: *[CliConfigType](../modules/cliconfigtype#cliconfigtype)*

*Defined in [Library/Cli/CliService.ts:14](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L14)*

___
<a id="programs"></a>

### `Private` programs

**programs**: *`object`*

*Defined in [Library/Cli/CliService.ts:16](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L16)*

#### Type declaration

[program: `string`]: [ProcessedProgramType](../modules/clitypes#processedprogramtype)

___

## Methods

<a id="collectaliases"></a>

### `Private` collectAliases

**collectAliases**(__namedParameters: *`object`*): `object`

*Defined in [Library/Cli/CliService.ts:72](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L72)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| config | `object` |

**Returns:** `object`

___
<a id="execute"></a>

###  execute

**execute**(argv: *`string`[]*): `Promise`<`void`>

*Defined in [Library/Cli/CliService.ts:42](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| argv | `string`[] |

**Returns:** `Promise`<`void`>

___
<a id="getcommand"></a>

###  getCommand

**getCommand**(command: *`string`*): [CliCommandType](../modules/clitypes#clicommandtype)

*Defined in [Library/Cli/CliService.ts:110](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | `string` |

**Returns:** [CliCommandType](../modules/clitypes#clicommandtype)

___
<a id="getcommands"></a>

###  getCommands

**getCommands**(): `object`

*Defined in [Library/Cli/CliService.ts:106](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L106)*

**Returns:** `object`

___
<a id="getconfig"></a>

###  getConfig

**getConfig**(): [CliConfigType](../modules/cliconfigtype#cliconfigtype)

*Defined in [Library/Cli/CliService.ts:114](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L114)*

**Returns:** [CliConfigType](../modules/cliconfigtype#cliconfigtype)

___
<a id="getprograms"></a>

###  getPrograms

**getPrograms**(): `object`

*Defined in [Library/Cli/CliService.ts:102](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L102)*

**Returns:** `object`

___
<a id="queparser"></a>

### `Private` queParser

**queParser**(commandLine: *`string`*): [ParsedCommandType](../modules/clitypes#parsedcommandtype)

*Defined in [Library/Cli/CliService.ts:143](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| commandLine | `string` |

**Returns:** [ParsedCommandType](../modules/clitypes#parsedcommandtype)

___
<a id="registerprogram"></a>

### `Private` registerProgram

**registerProgram**(program: *`string`*, __namedParameters: *`object`*): `void`

*Defined in [Library/Cli/CliService.ts:127](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L127)*

**Parameters:**

**program: `string`**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| commands | `object`[] |
| examples | `string`[] |

**Returns:** `void`

___
<a id="registerprograms"></a>

### `Private` registerPrograms

**registerPrograms**(programs: *`Array`< [CliProgramType](../modules/clitypes#cliprogramtype) &#124; [CliCommandType](../modules/clitypes#clicommandtype)>*): `void`

*Defined in [Library/Cli/CliService.ts:118](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| programs | `Array`< [CliProgramType](../modules/clitypes#cliprogramtype) &#124; [CliCommandType](../modules/clitypes#clicommandtype)> |

**Returns:** `void`

___
<a id="resolve"></a>

### `Private` resolve

**resolve**(argv: *`string`[]*): `Promise`<[Output](output)>

*Defined in [Library/Cli/CliService.ts:48](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| argv | `string`[] |

**Returns:** `Promise`<[Output](output)>

___
<a id="resolvetoken"></a>

###  resolveToken

**resolveToken**(args: *`object`*): `string`

*Defined in [Library/Cli/CliService.ts:34](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L34)*

**Parameters:**

**args: `object`**

| Name | Type |
| ------ | ------ |
| _ | `string`[] |

**Returns:** `string`

___
<a id="validate"></a>

### `Private` validate

**validate**(provided: *`object`*, requested: *`object`[]*): `object`

*Defined in [Library/Cli/CliService.ts:86](https://github.com/SpoonX/stix/blob/2a3d611/src/Library/Cli/CliService.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| provided | `object` |
| requested | `object`[] |

**Returns:** `object`

___

