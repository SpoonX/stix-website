---
title: Application
id: version-4.1.0-application
original_id: application
---

# `Class` Application

## Hierarchy

**Application**

## Index

### Constructors

* [constructor](application#constructor)

### Properties

* [applicationConfigs](application#applicationconfigs)
* [config](application#config)
* [mode](application#mode)
* [moduleManager](application#modulemanager)
* [serviceManager](application#servicemanager)
* [sharedEventManager](application#sharedeventmanager)

### Methods

* [bootstrap](application#bootstrap)
* [bootstrapCli](application#bootstrapcli)
* [bootstrapServer](application#bootstrapserver)
* [getMode](application#getmode)
* [getServiceManager](application#getservicemanager)
* [launch](application#launch)
* [start](application#start)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Application**(...appConfigs: *[ConfigType]()[]*): [Application](application)

*Defined in [Library/Application/Application.ts:26](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` appConfigs | [ConfigType]()[] |

**Returns:** [Application](application)

___

## Properties

<a id="applicationconfigs"></a>

### `Private` applicationConfigs

**applicationConfigs**: *[ConfigType]()[]*

*Defined in [Library/Application/Application.ts:22](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L22)*

___
<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:18](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L18)*

___
<a id="mode"></a>

### `Private` mode

**mode**: *[ApplicationModes](../enums/applicationmodes)*

*Defined in [Library/Application/Application.ts:16](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L16)*

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:24](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L24)*

___
<a id="servicemanager"></a>

### `Private` serviceManager

**serviceManager**: *[ServiceManager](servicemanager)*

*Defined in [Library/Application/Application.ts:20](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L20)*

___
<a id="sharedeventmanager"></a>

### `Private` sharedEventManager

**sharedEventManager**: *[SharedEventManager](sharedeventmanager)*

*Defined in [Library/Application/Application.ts:26](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L26)*

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(mode: *[ApplicationModes](../enums/applicationmodes)*, loadOnly?: *`boolean`*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:58](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L58)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| mode | [ApplicationModes](../enums/applicationmodes) | - |
| `Default value` loadOnly | `boolean` | false |

**Returns:** `Promise`<`this`>

___
<a id="bootstrapcli"></a>

### `Private` bootstrapCli

**bootstrapCli**(): `Promise`<`void`>

*Defined in [Library/Application/Application.ts:100](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L100)*

**Returns:** `Promise`<`void`>

___
<a id="bootstrapserver"></a>

### `Private` bootstrapServer

**bootstrapServer**(): `void`

*Defined in [Library/Application/Application.ts:108](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L108)*

**Returns:** `void`

___
<a id="getmode"></a>

###  getMode

**getMode**(): [ApplicationModes](../enums/applicationmodes)

*Defined in [Library/Application/Application.ts:50](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L50)*

**Returns:** [ApplicationModes](../enums/applicationmodes)

___
<a id="getservicemanager"></a>

###  getServiceManager

**getServiceManager**(): [ServiceManager](servicemanager)

*Defined in [Library/Application/Application.ts:54](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L54)*

**Returns:** [ServiceManager](servicemanager)

___
<a id="launch"></a>

###  launch

**launch**(mode?: *[ApplicationModes](../enums/applicationmodes)*, loadOnly?: *`boolean`*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:116](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L116)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` mode | [ApplicationModes](../enums/applicationmodes) |  ApplicationModes.Server |
| `Default value` loadOnly | `boolean` | false |

**Returns:** `Promise`<`this`>

___
<a id="start"></a>

###  start

**start**(): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:90](https://github.com/SpoonX/stix/blob/00e7e6e/src/Library/Application/Application.ts#L90)*

**Returns:** `Promise`<`this`>

___

