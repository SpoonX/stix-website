---
title: HelpCommand
id: version-4.1.5-helpcommand
original_id: helpcommand
---

# `Class` HelpCommand

## Hierarchy

 [AbstractCommand](abstractcommand)

**↳ HelpCommand**

## Index

### Properties

* [cliService](helpcommand#cliservice)

### Methods

* [output](helpcommand#output)
* [renderCommand](helpcommand#rendercommand)
* [renderExamples](helpcommand#renderexamples)
* [renderOptions](helpcommand#renderoptions)
* [renderUsage](helpcommand#renderusage)

---

## Properties

<a id="cliservice"></a>

### `Private` cliService

**cliService**: *[CliService](cliservice)*

*Defined in [Library/Command/HelpCommand.ts:10](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L10)*

___

## Methods

<a id="output"></a>

###  output

**output**(__namedParameters: *`object`*, output: *[Output](output)*): [Output](output)

*Defined in [Library/Command/HelpCommand.ts:12](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L12)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| options | `any` |
| params | `any` |

**output: [Output](output)**

**Returns:** [Output](output)

___
<a id="rendercommand"></a>

### `Private` renderCommand

**renderCommand**(__namedParameters: *`object`*): `object`

*Defined in [Library/Command/HelpCommand.ts:93](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L93)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| commandLine | `string` |
| config | `object` |

**Returns:** `object`

___
<a id="renderexamples"></a>

### `Private` renderExamples

**renderExamples**(examples: *`string`[]*): `object`

*Defined in [Library/Command/HelpCommand.ts:86](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| examples | `string`[] |

**Returns:** `object`

___
<a id="renderoptions"></a>

### `Private` renderOptions

**renderOptions**(options: *[CliCommandOptionsType](../modules/clitypes#clicommandoptionstype)*): `object`

*Defined in [Library/Command/HelpCommand.ts:70](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [CliCommandOptionsType](../modules/clitypes#clicommandoptionstype) |

**Returns:** `object`

___
<a id="renderusage"></a>

### `Private` renderUsage

**renderUsage**(command: *[CliCommandType](../modules/clitypes#clicommandtype)*): `object`

*Defined in [Library/Command/HelpCommand.ts:51](https://github.com/SpoonX/stix/blob/e27bbb3/src/Library/Command/HelpCommand.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | [CliCommandType](../modules/clitypes#clicommandtype) |

**Returns:** `object`

___

