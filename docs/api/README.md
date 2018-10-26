---
title: stix
---

#  stix

## Index

### Enumerations

* [ApplicationEvents](enums/applicationevents)
* [HttpStatusCodes](enums/httpstatuscodes)
* [ModuleManagerEvents](enums/modulemanagerevents)
* [RequestMethods](enums/requestmethods)
* [ResponseTypes](enums/responsetypes)

### Classes

* [AbstractActionController](classes/abstractactioncontroller)
* [AbstractPluginManager](classes/abstractpluginmanager)
* [Application](classes/application)
* [ClientErrorResponse](classes/clienterrorresponse)
* [Config](classes/config)
* [ControllerManager](classes/controllermanager)
* [Event](classes/event)
* [EventManager](classes/eventmanager)
* [InformationalResponse](classes/informationalresponse)
* [InvalidActionResultError](classes/invalidactionresulterror)
* [LoggerService](classes/loggerservice)
* [ModuleManager](classes/modulemanager)
* [NotFoundError](classes/notfounderror)
* [RedirectionResponse](classes/redirectionresponse)
* [Response](classes/response)
* [ResponseService](classes/responseservice)
* [Route](classes/route)
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
* [ConfigType](#configtype)
* [ControllerManagerConfigType](#controllermanagerconfigtype)
* [ControllerType](#controllertype)
* [DIArgumentsType](#diargumentstype)
* [FactoriesMapType](#factoriesmaptype)
* [InjectedFactoryPluginType](#injectedfactoryplugintype)
* [Instantiable](#instantiable)
* [InvokablesMapType](#invokablesmaptype)
* [PatchArgumentsType](#patchargumentstype)
* [ServiceKeyType](#servicekeytype)
* [ServiceManagerConfigType](#servicemanagerconfigtype)
* [ServiceType](#servicetype)
* [ServicesMapType](#servicesmaptype)
* [SharedMapType](#sharedmaptype)

### Variables

* [debug](#debug)
* [metaKey](#metakey)
* [swaggerUiAssetPath](#swaggeruiassetpath)

### Functions

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
* [dispatchMiddleware](#dispatchmiddleware)
* [getDependencies](#getdependencies)
* [inject](#inject)
* [patch](#patch)
* [requestMiddleware](#requestmiddleware)
* [routerMiddleware](#routermiddleware)

### Object literals

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

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L13)*

#### Type declaration

[alias: `string`]:  `string` &#124; `Function`

___
<a id="configtype"></a>

###  ConfigType

**ConfigType**: *`Partial`<`object`>*

*Defined in Library/Config/ConfigType.ts:9*

___
<a id="controllermanagerconfigtype"></a>

###  ControllerManagerConfigType

**ControllerManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/Config/ControllerManagerConfigType.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/ControllerManagerConfigType.ts#L3)*

___
<a id="controllertype"></a>

###  ControllerType

**ControllerType**: * `string` &#124; [AbstractActionController](classes/abstractactioncontroller)
*

*Defined in [Library/Controller/ControllerTypes.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerTypes.ts#L3)*

___
<a id="diargumentstype"></a>

###  DIArgumentsType

**DIArgumentsType**: *`object`*

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:7](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/InjectedServiceFactory.ts#L7)*

#### Type declaration

 dependency: [Instantiable](#instantiable)<`Object`>

`Optional`  plugin: [InjectedFactoryPluginType](#injectedfactoryplugintype)

 property: `string`

___
<a id="factoriesmaptype"></a>

###  FactoriesMapType

**FactoriesMapType**: *`Map`< `Function` &#124; `string`, [FactoryInterface](interfaces/factoryinterface)>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:7](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L7)*

___
<a id="injectedfactoryplugintype"></a>

###  InjectedFactoryPluginType

**InjectedFactoryPluginType**: *`function`*

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/InjectedServiceFactory.ts#L5)*

#### Type declaration
(sm: *[ServiceManager](classes/servicemanager)*, service?: *`Object`*): `Object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |
| `Optional` service | `Object` |

**Returns:** `Object`

___
<a id="instantiable"></a>

###  Instantiable

**Instantiable**: *`object`*

*Defined in [Library/Core/Types.ts:1](https://github.com/Rawphs/stix/blob/f097835/src/Library/Core/Types.ts#L1)*

#### Type declaration

 constructor : function
**new __type**(...args: *`any`[]*): `T`

*Defined in [Library/Core/Types.ts:1](https://github.com/Rawphs/stix/blob/f097835/src/Library/Core/Types.ts#L1)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `T`

___
<a id="invokablesmaptype"></a>

###  InvokablesMapType

**InvokablesMapType**: *`Map`< [Instantiable](#instantiable)<`Object`> &#124; `string`, [Instantiable](#instantiable)<`T`>>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L11)*

___
<a id="patchargumentstype"></a>

###  PatchArgumentsType

**PatchArgumentsType**: *`object`*

*Defined in [Library/ServiceManager/decorators/patch.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/patch.ts#L5)*

#### Type declaration

 factory: `boolean`

 method: `Function`

 name: `string`

___
<a id="servicekeytype"></a>

###  ServiceKeyType

**ServiceKeyType**: * [Instantiable](#instantiable)<`T`> &#124; `string`
*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:17](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L17)*

___
<a id="servicemanagerconfigtype"></a>

###  ServiceManagerConfigType

**ServiceManagerConfigType**: *`Partial`<`object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:19](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L19)*

___
<a id="servicetype"></a>

###  ServiceType

**ServiceType**: *`object`*

*Defined in [Library/ServiceManager/decorators/patch.ts:37](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/patch.ts#L37)*
*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/InjectedServiceFactory.ts#L13)*

#### Type declaration

[property: `string`]: `any`

___
<a id="servicesmaptype"></a>

###  ServicesMapType

**ServicesMapType**: *`Map`< `Function` &#124; `string`, `Object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L9)*

___
<a id="sharedmaptype"></a>

###  SharedMapType

**SharedMapType**: *`Map`< `Function` &#124; `string`, `Object`>*

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L15)*

___

## Variables

<a id="debug"></a>

### `Const` debug

**debug**: *`IDebugger`* =  createDebugLogger('application')

*Defined in [Library/EventManager/EventManager.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManager.ts#L6)*
*Defined in [Library/ModuleManager/ModuleManager.ts:8](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManager.ts#L8)*
*Defined in [middleware/requestMiddleware.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/middleware/requestMiddleware.ts#L6)*
*Defined in [middleware/routerMiddleware.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/middleware/routerMiddleware.ts#L5)*
*Defined in [middleware/dispatchMiddleware.ts:4](https://github.com/Rawphs/stix/blob/f097835/src/middleware/dispatchMiddleware.ts#L4)*
*Defined in [Library/Application/Application.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/Application/Application.ts#L15)*

___
<a id="metakey"></a>

### `Const` metaKey

**metaKey**: *`unique symbol`* =  Symbol('stix:di:patch')

*Defined in [Library/ServiceManager/decorators/inject.ts:4](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/inject.ts#L4)*
*Defined in [Library/ServiceManager/decorators/patch.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/patch.ts#L3)*

___
<a id="swaggeruiassetpath"></a>

### `Const` swaggerUiAssetPath

**swaggerUiAssetPath**: *`any`* =  require("swagger-ui-dist").getAbsoluteFSPath()

*Defined in [index.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/index.ts#L5)*

___

## Functions

<a id="controllermanagerfactory"></a>

### `Const` ControllerManagerFactory

**ControllerManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ControllerManager](classes/controllermanager)

*Defined in [Library/Controller/ControllerManagerFactory.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/Controller/ControllerManagerFactory.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ControllerManager](classes/controllermanager)

___
<a id="eventmanagerfactory"></a>

### `Const` EventManagerFactory

**EventManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [EventManager](classes/eventmanager)

*Defined in [Library/EventManager/EventManagerFactory.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/EventManager/EventManagerFactory.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [EventManager](classes/eventmanager)

___
<a id="injectedservicefactory"></a>

### `Const` InjectedServiceFactory

**InjectedServiceFactory**(Service: *[Instantiable](#instantiable)<`Object`>*): `(Anonymous function)`

*Defined in [Library/ServiceManager/InjectedServiceFactory.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/InjectedServiceFactory.ts#L15)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Service | [Instantiable](#instantiable)<`Object`> |

**Returns:** `(Anonymous function)`

___
<a id="loggerservicefactory"></a>

### `Const` LoggerServiceFactory

**LoggerServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [LoggerService](classes/loggerservice)

*Defined in [Library/Logger/LoggerServiceFactory.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/Logger/LoggerServiceFactory.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [LoggerService](classes/loggerservice)

___
<a id="modulemanagerfactory"></a>

### `Const` ModuleManagerFactory

**ModuleManagerFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ModuleManager](classes/modulemanager)

*Defined in [Library/ModuleManager/ModuleManagerFactory.ts:7](https://github.com/Rawphs/stix/blob/f097835/src/Library/ModuleManager/ModuleManagerFactory.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ModuleManager](classes/modulemanager)

___
<a id="responseservicefactory"></a>

### `Const` ResponseServiceFactory

**ResponseServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [ResponseService](classes/responseservice)

*Defined in [Library/Response/ResponseServiceFactory.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/Library/Response/ResponseServiceFactory.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [ResponseService](classes/responseservice)

___
<a id="routerservicefactory"></a>

### `Const` RouterServiceFactory

**RouterServiceFactory**(sm: *[ServiceManager](classes/servicemanager)*): [RouterService](classes/routerservice)

*Defined in [Library/Router/RouterServiceFactory.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/Library/Router/RouterServiceFactory.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |

**Returns:** [RouterService](classes/routerservice)

___
<a id="serverservicefactory"></a>

### `Const` ServerServiceFactory

**ServerServiceFactory**(sm: *[ServiceManagerInterface](interfaces/servicemanagerinterface)*): [ServerService](classes/serverservice)

*Defined in [Library/Server/ServerServiceFactory.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/Library/Server/ServerServiceFactory.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManagerInterface](interfaces/servicemanagerinterface) |

**Returns:** [ServerService](classes/serverservice)

___
<a id="applypatches"></a>

### `Const` applyPatches

**applyPatches**(sm: *[ServiceManager](classes/servicemanager)*, target: *[ServiceType](#servicetype)*): `any`

*Defined in [Library/ServiceManager/decorators/patch.ts:21](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/patch.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| sm | [ServiceManager](classes/servicemanager) |
| target | [ServiceType](#servicetype) |

**Returns:** `any`

___
<a id="createdebuglogger"></a>

### `Const` createDebugLogger

**createDebugLogger**(namespace: *`string`*, project?: *`string`*): `IDebugger`

*Defined in [debug.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/debug.ts#L3)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| namespace | `string` | - |
| `Default value` project | `string` | &quot;stix:&quot; |

**Returns:** `IDebugger`

___
<a id="dispatchmiddleware"></a>

### `Const` dispatchMiddleware

**dispatchMiddleware**(app: *[Application](classes/application)*): `dispatch`

*Defined in [middleware/dispatchMiddleware.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/middleware/dispatchMiddleware.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| app | [Application](classes/application) |

**Returns:** `dispatch`

___
<a id="getdependencies"></a>

### `Const` getDependencies

**getDependencies**(target: *`Object`*): `any`

*Defined in [Library/ServiceManager/decorators/inject.ts:16](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/inject.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `Object` |

**Returns:** `any`

___
<a id="inject"></a>

### `Const` inject

**inject**(dependency?: *`any`*, plugin?: *[InjectedFactoryPluginType](#injectedfactoryplugintype)*): `(Anonymous function)`

*Defined in [Library/ServiceManager/decorators/inject.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/inject.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` dependency | `any` |
| `Optional` plugin | [InjectedFactoryPluginType](#injectedfactoryplugintype) |

**Returns:** `(Anonymous function)`

___
<a id="patch"></a>

### `Const` patch

**patch**(name: *`string`*, method: *`Function`*, factory?: *`boolean`*): `(Anonymous function)`

*Defined in [Library/ServiceManager/decorators/patch.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/Library/ServiceManager/decorators/patch.ts#L11)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| method | `Function` | - |
| `Default value` factory | `boolean` | false |

**Returns:** `(Anonymous function)`

___
<a id="requestmiddleware"></a>

### `Const` requestMiddleware

**requestMiddleware**(): `request`

*Defined in [middleware/requestMiddleware.ts:8](https://github.com/Rawphs/stix/blob/f097835/src/middleware/requestMiddleware.ts#L8)*

**Returns:** `request`

___
<a id="routermiddleware"></a>

### `Const` routerMiddleware

**routerMiddleware**(app: *[Application](classes/application)*): `router`

*Defined in [middleware/routerMiddleware.ts:7](https://github.com/Rawphs/stix/blob/f097835/src/middleware/routerMiddleware.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| app | [Application](classes/application) |

**Returns:** `router`

___

## Object literals

<a id="logger"></a>

### `Const` logger

**logger**: *`object`*

*Defined in [config/logger.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/config/logger.ts#L3)*

<a id="logger.exitonerror"></a>

####  exitOnError

**exitOnError**: *`boolean`* = false

*Defined in [config/logger.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/config/logger.ts#L5)*

___
<a id="logger.level"></a>

####  level

**level**: *`string`* = "error"

*Defined in [config/logger.ts:4](https://github.com/Rawphs/stix/blob/f097835/src/config/logger.ts#L4)*

___
<a id="logger.transports"></a>

####  transports

**transports**: *`ConsoleTransportInstance`[]* =  [ new winston.transports.Console({ format: winston.format.simple() }) ]

*Defined in [config/logger.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/config/logger.ts#L6)*

___

___
<a id="response"></a>

### `Const` response

**response**: *`object`*

*Defined in [config/response.ts:10](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L10)*

Response configuration.

Register your custom responses with stix. This allows stix and stix modules to use your response classes (instead of the builtin classes) to create responses.

<a id="response.responses"></a>

####  responses

**responses**: *`object`*

*Defined in [config/response.ts:11](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L11)*

<a id="response.responses.clienterror"></a>

####  clientError

**clientError**: *[ClientErrorResponse](classes/clienterrorresponse)* =  ClientErrorResponse

*Defined in [config/response.ts:15](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L15)*

___
<a id="response.responses.informational"></a>

####  informational

**informational**: *[InformationalResponse](classes/informationalresponse)* =  InformationalResponse

*Defined in [config/response.ts:12](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L12)*

___
<a id="response.responses.redirection"></a>

####  redirection

**redirection**: *[RedirectionResponse](classes/redirectionresponse)* =  RedirectionResponse

*Defined in [config/response.ts:14](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L14)*

___
<a id="response.responses.servererror"></a>

####  serverError

**serverError**: *[ServerErrorResponse](classes/servererrorresponse)* =  ServerErrorResponse

*Defined in [config/response.ts:16](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L16)*

___
<a id="response.responses.successful"></a>

####  successful

**successful**: *[SuccessfulResponse](classes/successfulresponse)* =  SuccessfulResponse

*Defined in [config/response.ts:13](https://github.com/Rawphs/stix/blob/f097835/src/config/response.ts#L13)*

___

___

___
<a id="router"></a>

### `Const` router

**router**: *`object`*

*Defined in [config/routes.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/config/routes.ts#L3)*

<a id="router.routes"></a>

####  routes

**routes**: *`undefined`[]* =  []

*Defined in [config/routes.ts:4](https://github.com/Rawphs/stix/blob/f097835/src/config/routes.ts#L4)*

___

___
<a id="server"></a>

### `Const` server

**server**: *`object`*

*Defined in [config/server.ts:3](https://github.com/Rawphs/stix/blob/f097835/src/config/server.ts#L3)*

<a id="server.port"></a>

####  port

**port**: *`number`* = 1991

*Defined in [config/server.ts:4](https://github.com/Rawphs/stix/blob/f097835/src/config/server.ts#L4)*

___
<a id="server.cors"></a>

####  cors

**cors**: *`object`*

*Defined in [config/server.ts:5](https://github.com/Rawphs/stix/blob/f097835/src/config/server.ts#L5)*

<a id="server.cors.enabled"></a>

####  enabled

**enabled**: *`false`* = false

*Defined in [config/server.ts:6](https://github.com/Rawphs/stix/blob/f097835/src/config/server.ts#L6)*

___

___

___
<a id="services"></a>

### `Const` services

**services**: *`object`*

*Defined in [config/services.ts:8](https://github.com/Rawphs/stix/blob/f097835/src/config/services.ts#L8)*

<a id="services.factories"></a>

####  factories

**factories**: *`Map`<`Function`, [FactoryInterface](interfaces/factoryinterface)>* =  new Map<Function,FactoryInterface>([
    [ ServerService, ServerServiceFactory ],
    [ RouterService, RouterServiceFactory ],
    [ ControllerManager, ControllerManagerFactory ],
    [ ResponseService, ResponseServiceFactory ],
    [ LoggerService, LoggerServiceFactory ],
  ])

*Defined in [config/services.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/config/services.ts#L9)*

___

___

