---
title: stix
id: version-4.2.3-README
original_id: README
---

#  stix
![Stix](./stix.svg)
===================

[![Slack Status](https://spoonx-slack.herokuapp.com/badge.svg)](https://spoonx-slack.herokuapp.com)

A module-based, TypeScript-first Node.js® framework.

[![stix quickstart video](https://img.youtube.com/vi/qcXWH_aBMkU/0.jpg)](https://www.youtube.com/watch?v=qcXWH_aBMkU)

[Documentation](https://stix.netlify.com/docs/next/the-basics/about-stix) - [Website](https://stix.netlify.com)

Usage
-----

All repositories in a nice list. I like lists.

*   [stix-cli](https://github.com/SpoonX/stix-cli): the cli for your project and its own commands. Includes autocomplete.
*   [stix-gates](https://github.com/SpoonX/stix-gates): security and enrichments for your endpoints.
*   [stix-wetland](https://github.com/SpoonX/stix-wetland): a stix module for Wetland ORM.
*   [stix-swagger](https://github.com/SpoonX/stix-swagger): automatically generate swagger docs based on your stix app.
*   [stix-skeleton](https://github.com/SpoonX/stix-skeleton): the official stix skeleton, also used by `stix init`.
*   [stix-generator](https://github.com/SpoonX/stix-generator): code generators for stix projects.
*   [tape-roller](https://github.com/SpoonX/tape-roller): makes manipulating code projects easier with helpers for packages, files and git.

License
-------

MIT.

## Index

### Enumerations

* [ApplicationEvents](enums/applicationevents)
* [ApplicationModes](enums/applicationmodes)
* [HttpStatusCodes](enums/httpstatuscodes)
* [ModuleManagerEvents](enums/modulemanagerevents)
* [RequestMethods](enums/requestmethods)
* [ResponseStrategies](enums/responsestrategies)
* [ResponseTypes](enums/responsetypes)

### Classes

* [AbstractActionController](classes/abstractactioncontroller)
* [AbstractCommand](classes/abstractcommand)
* [AbstractFileBasedPluginManager](classes/abstractfilebasedpluginmanager)
* [AbstractMiddleware](classes/abstractmiddleware)
* [AbstractPluginManager](classes/abstractpluginmanager)
* [AbstractResponseHelper](classes/abstractresponsehelper)
* [Application](classes/application)
* [Cli](classes/cli)
* [CliService](classes/cliservice)
* [ClientErrorResponse](classes/clienterrorresponse)
* [CommandManager](classes/commandmanager)
* [Config](classes/config)
* [ControllerManager](classes/controllermanager)
* [DispatchMiddleware](classes/dispatchmiddleware)
* [Event](classes/event)
* [EventManager](classes/eventmanager)
* [HelpCommand](classes/helpcommand)
* [InformationalResponse](classes/informationalresponse)
* [InvalidActionResultError](classes/invalidactionresulterror)
* [InvalidArgumentError](classes/invalidargumenterror)
* [LoggerService](classes/loggerservice)
* [ModuleManager](classes/modulemanager)
* [NotFoundError](classes/notfounderror)
* [Output](classes/output)
* [RedirectionResponse](classes/redirectionresponse)
* [RequestMiddleware](classes/requestmiddleware)
* [Response](classes/response)
* [ResponseService](classes/responseservice)
* [Route](classes/route)
* [RouterMiddleware](classes/routermiddleware)
* [RouterService](classes/routerservice)
* [ServerErrorResponse](classes/servererrorresponse)
* [ServerService](classes/serverservice)
* [ServiceManager](classes/servicemanager)
* [SharedEventManager](classes/sharedeventmanager)
* [SuccessfulResponse](classes/successfulresponse)

### Interfaces

* [ConfigData](interfaces/configdata)
* [ContextInterface](interfaces/contextinterface)
* [FactoryInterface](interfaces/factoryinterface)
* [LoggerConfigInterface](interfaces/loggerconfiginterface)
* [MiddlewareInterface](interfaces/middlewareinterface)
* [ModuleClassInterface](interfaces/moduleclassinterface)
* [ModuleInterface](interfaces/moduleinterface)
* [ModuleManagerConfigInterface](interfaces/modulemanagerconfiginterface)
* [RegisteredRouteInterface](interfaces/registeredrouteinterface)
* [ResponseArgumentsInterface](interfaces/responseargumentsinterface)
* [ResponseConfigInterface](interfaces/responseconfiginterface)
* [RouteInterface](interfaces/routeinterface)
* [RouterConfigInterface](interfaces/routerconfiginterface)
* [SelfDestructingCallbackInterface](interfaces/selfdestructingcallbackinterface)
* [ServerConfigInterface](interfaces/serverconfiginterface)
* [ServiceFactoryType](interfaces/servicefactorytype)
* [ServiceManagerInterface](interfaces/servicemanagerinterface)

### Type aliases

* [AliasesType](#aliasestype)
* [ApplicationConfigType](#applicationconfigtype)
* [CliCommandConfigType](#clicommandconfigtype)
* [CliCommandOptionType](#clicommandoptiontype)
* [CliCommandOptionsType](#clicommandoptionstype)
* [CliCommandType](#clicommandtype)
* [CliConfigType](#cliconfigtype)
* [CliProgramConfigType](#cliprogramconfigtype)
* [CliProgramType](#cliprogramtype)
* [CommandManagerConfigType](#commandmanagerconfigtype)
* [ConfigType](#configtype)
* [ControllerManagerConfigType](#controllermanagerconfigtype)
* [ControllerType](#controllertype)
* [DIArgumentsType](#diargumentstype)
* [FactoriesMapType](#factoriesmaptype)
* [FileBasedPluginManagerConfigType](#filebasedpluginmanagerconfigtype)
* [FileBasedPluginType](#filebasedplugintype)
* [InjectedFactoryPluginType](#injectedfactoryplugintype)
* [Instantiable](#instantiable)
* [InvokablesMapType](#invokablesmaptype)
* [MiddlewareLookupType](#middlewarelookuptype)
* [MiddlewareType](#middlewaretype)
* [ParsedCommandType](#parsedcommandtype)
* [PatchArgumentsType](#patchargumentstype)
* [ProcessedCommandsType](#processedcommandstype)
* [ProcessedProgramType](#processedprogramtype)
* [RegisteredMiddlewareType](#registeredmiddlewaretype)
* [ServiceKeyType](#servicekeytype)
* [ServiceManagerConfigType](#servicemanagerconfigtype)
* [ServiceType](#servicetype)
* [ServicesMapType](#servicesmaptype)
* [SharedMapType](#sharedmaptype)

### Variables

* [bin](#bin)
* [debug](#debug)
* [fallbackToken](#fallbacktoken)
* [metaKey](#metakey)

### Functions

* [CliServiceFactory](#cliservicefactory)
* [CommandManagerFactory](#commandmanagerfactory)
* [ControllerManagerFactory](#controllermanagerfactory)
* [EventManagerFactory](#eventmanagerfactory)
* [InjectedServiceFactory](#injectedservicefactory)
* [LoggerServiceFactory](#loggerservicefactory)
* [ModuleManagerFactory](#modulemanagerfactory)
* [ResponseServiceFactory](#responseservicefactory)
* [RouterServiceFactory](#routerservicefactory)
* [ServerServiceFactory](#serverservicefactory)
* [applyPatches](#applypatches)
* [createDebugLogger](#createdebuglogger)
* [getDependencies](#getdependencies)
* [inject](#inject)
* [patch](#patch)

### Object literals

* [cli](#cli)
* [command](#command)
* [logger](#logger)
* [response](#response)
* [router](#router)
* [server](#server)
* [services](#services)

---

## Type aliases

<a id="aliasestype"></a>

###  AliasesType

**AliasesType**: *`object`*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L13)*

#### Type declaration

[alias: `string`]:  `string` &#124; `Function`

___
<a id="applicationconfigtype"></a>

###  ApplicationConfigType

**ApplicationConfigType**: *`object`*

*Defined in [Library/Application/ApplicationConfigType.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/ApplicationConfigType.ts#L3)*

#### Type declaration

 mode: [ApplicationModes](enums/applicationmodes)

___
<a id="clicommandconfigtype"></a>

###  CliCommandConfigType

**CliCommandConfigType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L13)*

___
<a id="clicommandoptiontype"></a>

###  CliCommandOptionType

**CliCommandOptionType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:23](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L23)*

___
<a id="clicommandoptionstype"></a>

###  CliCommandOptionsType

**CliCommandOptionsType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:19](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L19)*

___
<a id="clicommandtype"></a>

###  CliCommandType

**CliCommandType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L3)*

___
<a id="cliconfigtype"></a>

###  CliConfigType

**CliConfigType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliConfigType.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliConfigType.ts#L3)*

___
<a id="cliprogramconfigtype"></a>

###  CliProgramConfigType

**CliProgramConfigType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:42](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L42)*

___
<a id="cliprogramtype"></a>

###  CliProgramType

**CliProgramType**: *`Partial`<`object`>*

*Defined in [Library/Cli/CliTypes.ts:31](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L31)*

___
<a id="commandmanagerconfigtype"></a>

###  CommandManagerConfigType

**CommandManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/Command/CommandManagerConfigType.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Command/CommandManagerConfigType.ts#L3)*

___
<a id="configtype"></a>

###  ConfigType

**ConfigType**: *`Partial`<`object`>*

*Defined in [Library/Config/ConfigInterface.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Config/ConfigInterface.ts#L9)*

___
<a id="controllermanagerconfigtype"></a>

###  ControllerManagerConfigType

**ControllerManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/Config/ControllerManagerConfigType.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Config/ControllerManagerConfigType.ts#L3)*

___
<a id="controllertype"></a>

###  ControllerType

**ControllerType**: * `string` &#124; [AbstractActionController](classes/abstractactioncontroller)
*

*Defined in [Library/Controller/ControllerTypes.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Controller/ControllerTypes.ts#L3)*

___
<a id="diargumentstype"></a>

###  DIArgumentsType

**DIArgumentsType**: *`object`*

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/InjectedServiceFactory.ts#L7)*

#### Type declaration

 dependency: [Instantiable](#instantiable)<`Object`>

`Optional`  plugin: [InjectedFactoryPluginType](#injectedfactoryplugintype)

 property: `string`

___
<a id="factoriesmaptype"></a>

###  FactoriesMapType

**FactoriesMapType**: *`Map`< `Function` &#124; `string`, [FactoryInterface](interfaces/factoryinterface)>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L7)*

___
<a id="filebasedpluginmanagerconfigtype"></a>

###  FileBasedPluginManagerConfigType

**FileBasedPluginManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/ServiceManager/FileBasedPluginManagerConfigType.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/FileBasedPluginManagerConfigType.ts#L3)*

___
<a id="filebasedplugintype"></a>

###  FileBasedPluginType

**FileBasedPluginType**: * `string` &#124; `Function`
*

*Defined in [Library/ServiceManager/FileBasedPluginType.ts:1](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/FileBasedPluginType.ts#L1)*

___
<a id="injectedfactoryplugintype"></a>

###  InjectedFactoryPluginType

**InjectedFactoryPluginType**: *`function`*

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/InjectedServiceFactory.ts#L5)*

#### Type declaration
(sm: *[ServiceManager](classes/servicemanager)*, service?: *`Object`*): `Object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |
| `Optional` service | `Object` |

**Returns:** `Object`

___
<a id="instantiable"></a>

###  Instantiable

**Instantiable**: *`object`*

*Defined in [Library/Core/Types.ts:1](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Core/Types.ts#L1)*

#### Type declaration

 constructor : function
**new __type**(...args: *`any`[]*): `T`

*Defined in [Library/Core/Types.ts:1](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Core/Types.ts#L1)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `T`

___
<a id="invokablesmaptype"></a>

###  InvokablesMapType

**InvokablesMapType**: *`Map`< [Instantiable](#instantiable)<`Object`> &#124; `string`, [Instantiable](#instantiable)<`T`>>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L11)*

___
<a id="middlewarelookuptype"></a>

###  MiddlewareLookupType

**MiddlewareLookupType**: * `string` &#124; [AbstractMiddleware](classes/abstractmiddleware) &#124; `Middleware`
*

*Defined in [Library/Middleware/MiddlewareTypes.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/MiddlewareTypes.ts#L6)*

___
<a id="middlewaretype"></a>

###  MiddlewareType

**MiddlewareType**: * [AbstractMiddleware](classes/abstractmiddleware) &#124; `Middleware`
*

*Defined in [Library/Middleware/MiddlewareTypes.ts:8](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/MiddlewareTypes.ts#L8)*

___
<a id="parsedcommandtype"></a>

###  ParsedCommandType

**ParsedCommandType**: *`object`*

*Defined in [Library/Cli/CliTypes.ts:36](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L36)*

#### Type declaration

 args: `object`[]

 token: `string`

___
<a id="patchargumentstype"></a>

###  PatchArgumentsType

**PatchArgumentsType**: *`object`*

*Defined in [Library/ServiceManager/decorators/patch.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/patch.ts#L5)*

#### Type declaration

 factory: `boolean`

 method: `Function`

 name: `string`

___
<a id="processedcommandstype"></a>

###  ProcessedCommandsType

**ProcessedCommandsType**: *`object`*

*Defined in [Library/Cli/CliTypes.ts:40](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L40)*

#### Type declaration

[command: `string`]: [CliCommandType](#clicommandtype)

___
<a id="processedprogramtype"></a>

###  ProcessedProgramType

**ProcessedProgramType**: *`object`*

*Defined in [Library/Cli/CliTypes.ts:38](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliTypes.ts#L38)*

#### Type declaration

 commands: [ProcessedCommandsType](#processedcommandstype)

 examples: `string`[]

 program: `string`

___
<a id="registeredmiddlewaretype"></a>

###  RegisteredMiddlewareType

**RegisteredMiddlewareType**: * `Middleware` & `object`
*

*Defined in [Library/Middleware/MiddlewareTypes.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/MiddlewareTypes.ts#L4)*

___
<a id="servicekeytype"></a>

###  ServiceKeyType

**ServiceKeyType**: * [Instantiable](#instantiable)<`T`> &#124; `string`
*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:17](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L17)*

___
<a id="servicemanagerconfigtype"></a>

###  ServiceManagerConfigType

**ServiceManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:19](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L19)*

___
<a id="servicetype"></a>

###  ServiceType

**ServiceType**: *`object`*

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/InjectedServiceFactory.ts#L13)*
*Defined in [Library/ServiceManager/decorators/patch.ts:37](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/patch.ts#L37)*

#### Type declaration

[property: `string`]: `any`

___
<a id="servicesmaptype"></a>

###  ServicesMapType

**ServicesMapType**: *`Map`< `Function` &#124; `string`, `Object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L9)*

___
<a id="sharedmaptype"></a>

###  SharedMapType

**SharedMapType**: *`Map`< `Function` &#124; `string`, `Object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L15)*

___

## Variables

<a id="bin"></a>

### `Const` bin

**bin**: *"stix"* = "stix"

*Defined in [config/cli.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L5)*

___
<a id="debug"></a>

### `Const` debug

**debug**: *`IDebugger`* =  createDebugLogger('application')

*Defined in [Library/ServiceManager/AbstractFileBasedPluginManager.ts:8](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/AbstractFileBasedPluginManager.ts#L8)*
*Defined in [Library/EventManager/EventManager.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/EventManager/EventManager.ts#L6)*
*Defined in [Library/ModuleManager/ModuleManager.ts:8](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManager.ts#L8)*
*Defined in [Library/Middleware/DispatchMiddleware.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/DispatchMiddleware.ts#L9)*
*Defined in [Library/Middleware/RequestMiddleware.ts:8](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RequestMiddleware.ts#L8)*
*Defined in [Library/Middleware/RouterMiddleware.ts:10](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Middleware/RouterMiddleware.ts#L10)*
*Defined in [Library/Application/Application.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Application/Application.ts#L13)*

___
<a id="fallbacktoken"></a>

### `Const` fallbackToken

**fallbackToken**: *"help"* = "help"

*Defined in [config/cli.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L4)*

___
<a id="metakey"></a>

### `Const` metaKey

**metaKey**: *`unique symbol`* =  Symbol('stix:di:patch')

*Defined in [Library/ServiceManager/decorators/inject.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/inject.ts#L4)*
*Defined in [Library/ServiceManager/decorators/patch.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/patch.ts#L3)*

___

## Functions

<a id="cliservicefactory"></a>

### `Const` CliServiceFactory

**CliServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [CliService](classes/cliservice)

*Defined in [Library/Cli/CliServiceFactory.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Cli/CliServiceFactory.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [CliService](classes/cliservice)

___
<a id="commandmanagerfactory"></a>

### `Const` CommandManagerFactory

**CommandManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [CommandManager](classes/commandmanager)

*Defined in [Library/Command/CommandManagerFactory.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Command/CommandManagerFactory.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [CommandManager](classes/commandmanager)

___
<a id="controllermanagerfactory"></a>

### `Const` ControllerManagerFactory

**ControllerManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ControllerManager](classes/controllermanager)

*Defined in [Library/Controller/ControllerManagerFactory.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Controller/ControllerManagerFactory.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ControllerManager](classes/controllermanager)

___
<a id="eventmanagerfactory"></a>

### `Const` EventManagerFactory

**EventManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [EventManager](classes/eventmanager)

*Defined in [Library/EventManager/EventManagerFactory.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/EventManager/EventManagerFactory.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [EventManager](classes/eventmanager)

___
<a id="injectedservicefactory"></a>

### `Const` InjectedServiceFactory

**InjectedServiceFactory**(Service: *[Instantiable](#instantiable)<`Object`>*): `(Anonymous function)`

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/InjectedServiceFactory.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Service | [Instantiable](#instantiable)<`Object`> |

**Returns:** `(Anonymous function)`

___
<a id="loggerservicefactory"></a>

### `Const` LoggerServiceFactory

**LoggerServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [LoggerService](classes/loggerservice)

*Defined in [Library/Logger/LoggerServiceFactory.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Logger/LoggerServiceFactory.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [LoggerService](classes/loggerservice)

___
<a id="modulemanagerfactory"></a>

### `Const` ModuleManagerFactory

**ModuleManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ModuleManager](classes/modulemanager)

*Defined in [Library/ModuleManager/ModuleManagerFactory.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ModuleManager/ModuleManagerFactory.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ModuleManager](classes/modulemanager)

___
<a id="responseservicefactory"></a>

### `Const` ResponseServiceFactory

**ResponseServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ResponseService](classes/responseservice)

*Defined in [Library/Response/ResponseServiceFactory.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Response/ResponseServiceFactory.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ResponseService](classes/responseservice)

___
<a id="routerservicefactory"></a>

### `Const` RouterServiceFactory

**RouterServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [RouterService](classes/routerservice)

*Defined in [Library/Router/RouterServiceFactory.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Router/RouterServiceFactory.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [RouterService](classes/routerservice)

___
<a id="serverservicefactory"></a>

### `Const` ServerServiceFactory

**ServerServiceFactory**(sm: *[ServiceManagerInterface](interfaces/servicemanagerinterface)*): [ServerService](classes/serverservice)

*Defined in [Library/Server/ServerServiceFactory.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/Server/ServerServiceFactory.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManagerInterface](interfaces/servicemanagerinterface) |

**Returns:** [ServerService](classes/serverservice)

___
<a id="applypatches"></a>

### `Const` applyPatches

**applyPatches**(sm: *[ServiceManager](classes/servicemanager)*, target: *[ServiceType](#servicetype)*): `any`

*Defined in [Library/ServiceManager/decorators/patch.ts:21](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/patch.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |
| target | [ServiceType](#servicetype) |

**Returns:** `any`

___
<a id="createdebuglogger"></a>

### `Const` createDebugLogger

**createDebugLogger**(namespace: *`string`*, project?: *`string`*): `IDebugger`

*Defined in [debug.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/debug.ts#L3)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| namespace | `string` | - |
| `Default value` project | `string` | &quot;stix:&quot; |

**Returns:** `IDebugger`

___
<a id="getdependencies"></a>

### `Const` getDependencies

**getDependencies**(target: *`Object`*): `any`

*Defined in [Library/ServiceManager/decorators/inject.ts:16](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/inject.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Object` |

**Returns:** `any`

___
<a id="inject"></a>

### `Const` inject

**inject**(dependency?: *`any`*, plugin?: *[InjectedFactoryPluginType](#injectedfactoryplugintype)*): `(Anonymous function)`

*Defined in [Library/ServiceManager/decorators/inject.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/inject.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` dependency | `any` |
| `Optional` plugin | [InjectedFactoryPluginType](#injectedfactoryplugintype) |

**Returns:** `(Anonymous function)`

___
<a id="patch"></a>

### `Const` patch

**patch**(name: *`string`*, method: *`Function`*, factory?: *`boolean`*): `(Anonymous function)`

*Defined in [Library/ServiceManager/decorators/patch.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/Library/ServiceManager/decorators/patch.ts#L11)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| method | `Function` | - |
| `Default value` factory | `boolean` | false |

**Returns:** `(Anonymous function)`

___

## Object literals

<a id="cli"></a>

### `Const` cli

**cli**: *`object`*

*Defined in [config/cli.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L7)*

<a id="cli.bin"></a>

####  bin

**bin**: *`string`*

*Defined in [config/cli.ts:8](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L8)*

___
<a id="cli.commands"></a>

####  commands

**commands**: *`object`[]* =  [
    Cli.program('cli', {
      commands: [
        Cli.command('help [command]', HelpCommand, 'output', {
          description: 'Output help for provided command',
        }),
      ],
      examples: [
        `$ ${bin} ${fallbackToken}`,
        `$ ${bin} ${fallbackToken} some:command`,
      ],
    }),
  ]

*Defined in [config/cli.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L15)*

___
<a id="cli.defaultprogramdescription"></a>

####  defaultProgramDescription

**defaultProgramDescription**: *`string`* = "Project-scope commands."

*Defined in [config/cli.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L13)*

___
<a id="cli.defaultprogramfooter"></a>

####  defaultProgramFooter

**defaultProgramFooter**: *`string`* = ""

*Defined in [config/cli.ts:14](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L14)*

___
<a id="cli.defaultprogramname"></a>

####  defaultProgramName

**defaultProgramName**: *`string`* = "project"

*Defined in [config/cli.ts:12](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L12)*

___
<a id="cli.fallbacktoken"></a>

####  fallbackToken

**fallbackToken**: *`string`*

*Defined in [config/cli.ts:9](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L9)*

___
<a id="cli.subtitle"></a>

####  subtitle

**subtitle**: *`string`* = "Stix CLI tools for your stix CLI needs. 
	...And by that we mean stix projects."

*Defined in [config/cli.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L11)*

___
<a id="cli.title"></a>

####  title

**title**: *`string`* = "Stix CLI"

*Defined in [config/cli.ts:10](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/cli.ts#L10)*

___

___
<a id="command"></a>

### `Const` command

**command**: *`object`*

*Defined in [config/command.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/command.ts#L4)*

<a id="command.commands"></a>

####  commands

**commands**: *`object`*

*Defined in [config/command.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/command.ts#L5)*

<a id="command.commands.invokables"></a>

####  invokables

**invokables**: *`Map`<[HelpCommand](classes/helpcommand), [HelpCommand](classes/helpcommand)>* =  new Map([
      [ HelpCommand, HelpCommand ],
    ])

*Defined in [config/command.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/command.ts#L6)*

___

___

___
<a id="logger"></a>

### `Const` logger

**logger**: *`object`*

*Defined in [config/logger.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/logger.ts#L3)*

<a id="logger.exitonerror"></a>

####  exitOnError

**exitOnError**: *`boolean`* = false

*Defined in [config/logger.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/logger.ts#L5)*

___
<a id="logger.level"></a>

####  level

**level**: *`string`* = "error"

*Defined in [config/logger.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/logger.ts#L4)*

___
<a id="logger.transports"></a>

####  transports

**transports**: *`ConsoleTransportInstance`[]* =  [ new winston.transports.Console({ format: winston.format.simple() }) ]

*Defined in [config/logger.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/logger.ts#L6)*

___

___
<a id="response"></a>

### `Const` response

**response**: *`object`*

*Defined in [config/response.ts:10](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L10)*

Response configuration.

Register your custom responses with stix. This allows stix and stix modules to use your response classes (instead of the builtin classes) to create responses.

<a id="response.responses"></a>

####  responses

**responses**: *`object`*

*Defined in [config/response.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L11)*

<a id="response.responses.clienterror"></a>

####  clientError

**clientError**: *[ClientErrorResponse](classes/clienterrorresponse)* =  ClientErrorResponse

*Defined in [config/response.ts:15](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L15)*

___
<a id="response.responses.informational"></a>

####  informational

**informational**: *[InformationalResponse](classes/informationalresponse)* =  InformationalResponse

*Defined in [config/response.ts:12](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L12)*

___
<a id="response.responses.redirection"></a>

####  redirection

**redirection**: *[RedirectionResponse](classes/redirectionresponse)* =  RedirectionResponse

*Defined in [config/response.ts:14](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L14)*

___
<a id="response.responses.servererror"></a>

####  serverError

**serverError**: *[ServerErrorResponse](classes/servererrorresponse)* =  ServerErrorResponse

*Defined in [config/response.ts:16](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L16)*

___
<a id="response.responses.successful"></a>

####  successful

**successful**: *[SuccessfulResponse](classes/successfulresponse)* =  SuccessfulResponse

*Defined in [config/response.ts:13](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/response.ts#L13)*

___

___

___
<a id="router"></a>

### `Const` router

**router**: *`object`*

*Defined in [config/routes.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/routes.ts#L3)*

<a id="router.routes"></a>

####  routes

**routes**: *`undefined`[]* =  []

*Defined in [config/routes.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/routes.ts#L4)*

___

___
<a id="server"></a>

### `Const` server

**server**: *`object`*

*Defined in [config/server.ts:3](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/server.ts#L3)*

<a id="server.hostname"></a>

####  hostname

**hostname**: *`string`* = "localhost"

*Defined in [config/server.ts:4](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/server.ts#L4)*

___
<a id="server.port"></a>

####  port

**port**: *`number`* = 1991

*Defined in [config/server.ts:5](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/server.ts#L5)*

___
<a id="server.cors"></a>

####  cors

**cors**: *`object`*

*Defined in [config/server.ts:6](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/server.ts#L6)*

<a id="server.cors.enabled"></a>

####  enabled

**enabled**: *`false`* = false

*Defined in [config/server.ts:7](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/server.ts#L7)*

___

___

___
<a id="services"></a>

### `Const` services

**services**: *`object`*

*Defined in [config/services.ts:11](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/services.ts#L11)*

<a id="services.factories"></a>

####  factories

**factories**: *`Map`<`Function`, [FactoryInterface](interfaces/factoryinterface)>* =  new Map<Function,FactoryInterface>([
    [ CliService, CliServiceFactory ],
    [ ServerService, ServerServiceFactory ],
    [ RouterService, RouterServiceFactory ],
    [ CommandManager, CommandManagerFactory ],
    [ ControllerManager, ControllerManagerFactory ],
    [ ResponseService, ResponseServiceFactory ],
    [ LoggerService, LoggerServiceFactory ],
  ])

*Defined in [config/services.ts:17](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/services.ts#L17)*

___
<a id="services.invokables"></a>

####  invokables

**invokables**: *`Map`<`Function`, `Function`>* =  new Map<Function, Function>([
    [ RouterMiddleware, RouterMiddleware ],
    [ RequestMiddleware, RequestMiddleware ],
    [ DispatchMiddleware, DispatchMiddleware ],
  ])

*Defined in [config/services.ts:12](https://github.com/SpoonX/stix/blob/cb15ad1/src/config/services.ts#L12)*

___

___

