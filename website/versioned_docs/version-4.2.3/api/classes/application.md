---
title: Application
id: version-4.2.3-application
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
* [environment](application#environment)
* [mode](application#mode)
* [moduleManager](application#modulemanager)
* [serviceManager](application#servicemanager)
* [sharedEventManager](application#sharedeventmanager)

### Methods

* [bootstrap](application#bootstrap)
* [bootstrapCli](application#bootstrapcli)
* [bootstrapServer](application#bootstrapserver)
* [getEnvironment](application#getenvironment)
* [getMode](application#getmode)
* [getServiceManager](application#getservicemanager)
* [isProduction](application#isproduction)
* [launch](application#launch)
* [start](application#start)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new Application**(...appConfigs: *[ConfigType]()[]*): [Application](application)

*Defined in [Library/Application/Application.ts:28](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L28)*

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

*Defined in [Library/Application/Application.ts:24](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L24)*

___
<a id="config"></a>

### `Private` config

**config**: *[Config](config)*

*Defined in [Library/Application/Application.ts:20](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L20)*

___
<a id="environment"></a>

### `Private` environment

**environment**: *`string`* =  process.env.NODE_ENV || 'development'

*Defined in [Library/Application/Application.ts:18](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L18)*

___
<a id="mode"></a>

### `Private` mode

**mode**: *[ApplicationModes](../enums/applicationmodes)*

*Defined in [Library/Application/Application.ts:16](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L16)*

___
<a id="modulemanager"></a>

### `Private` moduleManager

**moduleManager**: *[ModuleManager](modulemanager)*

*Defined in [Library/Application/Application.ts:26](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L26)*

___
<a id="servicemanager"></a>

### `Private` serviceManager

**serviceManager**: *[ServiceManager](servicemanager)*

*Defined in [Library/Application/Application.ts:22](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L22)*

___
<a id="sharedeventmanager"></a>

### `Private` sharedEventManager

**sharedEventManager**: *[SharedEventManager](sharedeventmanager)*

*Defined in [Library/Application/Application.ts:28](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L28)*

___

## Methods

<a id="bootstrap"></a>

### `Private` bootstrap

**bootstrap**(mode: *[ApplicationModes](../enums/applicationmodes)*, loadOnly?: *`boolean`*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:60](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L60)*

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

*Defined in [Library/Application/Application.ts:102](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L102)*

**Returns:** `Promise`<`void`>

___
<a id="bootstrapserver"></a>

### `Private` bootstrapServer

**bootstrapServer**(): `void`

*Defined in [Library/Application/Application.ts:110](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L110)*

**Returns:** `void`

___
<a id="getenvironment"></a>

###  getEnvironment

**getEnvironment**(): `string`

*Defined in [Library/Application/Application.ts:118](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L118)*

**Returns:** `string`

___
<a id="getmode"></a>

###  getMode

**getMode**(): [ApplicationModes](../enums/applicationmodes)

*Defined in [Library/Application/Application.ts:52](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L52)*

**Returns:** [ApplicationModes](../enums/applicationmodes)

___
<a id="getservicemanager"></a>

###  getServiceManager

**getServiceManager**(): [ServiceManager](servicemanager)

*Defined in [Library/Application/Application.ts:56](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L56)*

**Returns:** [ServiceManager](servicemanager)

___
<a id="isproduction"></a>

###  isProduction

**isProduction**(): `boolean`

*Defined in [Library/Application/Application.ts:122](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L122)*

**Returns:** `boolean`

___
<a id="launch"></a>

###  launch

**launch**(mode?: *[ApplicationModes](../enums/applicationmodes)*, loadOnly?: *`boolean`*): `Promise`<`this`>

*Defined in [Library/Application/Application.ts:126](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L126)*

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

*Defined in [Library/Application/Application.ts:92](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L92)*

**Returns:** `Promise`<`this`>

___

