---
title: ModuleInterface
id: version-3.0.1-moduleinterface
original_id: moduleinterface
---

# `Interface` ModuleInterface

## Hierarchy

**ModuleInterface**

## Index

### Properties

* [getConfig](moduleinterface#getconfig)
* [init](moduleinterface#init)
* [onBootstrap](moduleinterface#onbootstrap)

---

## Properties

<a id="getconfig"></a>

### `Optional` getConfig

**getConfig**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:6](https://github.com/SpoonX/stix/blob/f097835/src/Library/ModuleManager/ModuleInterface.ts#L6)*

#### Type declaration
():  `object` &#124; `Promise`<`object`>

**Returns:**  `object` &#124; `Promise`<`object`>

___
<a id="init"></a>

### `Optional` init

**init**: *`function`*

*Defined in [Library/ModuleManager/ModuleInterface.ts:7](https://github.com/SpoonX/stix/blob/f097835/src/Library/ModuleManager/ModuleInterface.ts#L7)*

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

*Defined in [Library/ModuleManager/ModuleInterface.ts:5](https://github.com/SpoonX/stix/blob/f097835/src/Library/ModuleManager/ModuleInterface.ts#L5)*

#### Type declaration
(event?: *[Event](../classes/event)<`any`>*):  `void` &#124; `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | [Event](../classes/event)<`any`> |

**Returns:**  `void` &#124; `Promise`<`any`>

___

