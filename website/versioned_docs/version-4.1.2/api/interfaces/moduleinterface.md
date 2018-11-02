---
title: ModuleInterface
id: version-4.1.2-moduleinterface
original_id: moduleinterface
---

# `Interface` ModuleInterface

## Hierarchy

**ModuleInterface**

## Index

### Properties

* [getCliConfig](moduleinterface#getcliconfig)
* [getConfig](moduleinterface#getconfig)
* [getServerConfig](moduleinterface#getserverconfig)
* [init](moduleinterface#init)
* [onBootstrap](moduleinterface#onbootstrap)

---

## Properties

<a id="getcliconfig"></a>

### `Optional` getCliConfig

**getCliConfig**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:8](https://github.com/SpoonX/stix/blob/64b0f60/src/Library/ModuleManager/ModuleInterface.ts#L8)*

#### Type declaration
():  `object` &#124; `Promise`<`object`>

**Returns:**  `object` &#124; `Promise`<`object`>

___
<a id="getconfig"></a>

### `Optional` getConfig

**getConfig**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:6](https://github.com/SpoonX/stix/blob/64b0f60/src/Library/ModuleManager/ModuleInterface.ts#L6)*

#### Type declaration
(mode?: *`string`*):  `object` &#124; `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` mode | `string` |

**Returns:**  `object` &#124; `Promise`<`object`>

___
<a id="getserverconfig"></a>

### `Optional` getServerConfig

**getServerConfig**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:7](https://github.com/SpoonX/stix/blob/64b0f60/src/Library/ModuleManager/ModuleInterface.ts#L7)*

#### Type declaration
():  `object` &#124; `Promise`<`object`>

**Returns:**  `object` &#124; `Promise`<`object`>

___
<a id="init"></a>

### `Optional` init

**init**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:9](https://github.com/SpoonX/stix/blob/64b0f60/src/Library/ModuleManager/ModuleInterface.ts#L9)*

#### Type declaration
(moduleManager?: *[ModuleManager](../classes/modulemanager)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` moduleManager | [ModuleManager](../classes/modulemanager) |

**Returns:** `void`

___
<a id="onbootstrap"></a>

### `Optional` onBootstrap

**onBootstrap**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:5](https://github.com/SpoonX/stix/blob/64b0f60/src/Library/ModuleManager/ModuleInterface.ts#L5)*

#### Type declaration
(event?: *[Event](../classes/event)<`any`>*):  `void` &#124; `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | [Event](../classes/event)<`any`> |

**Returns:**  `void` &#124; `Promise`<`any`>

___

