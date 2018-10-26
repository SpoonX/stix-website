---
title: ServerConfigInterface
id: version-3.0.0-serverconfiginterface
original_id: serverconfiginterface
---

# `Interface` ServerConfigInterface

The Server Config interface acts as a guide for writting the server configuration. All fields are optional. Bear in mind that CORS is disabled by default.

## Hierarchy

**ServerConfigInterface**

## Indexable

\[key: `string`\]:&nbsp;`any`
The Server Config interface acts as a guide for writting the server configuration. All fields are optional. Bear in mind that CORS is disabled by default.

## Index

### Properties

* [bootstrap](serverconfiginterface#bootstrap)
* [cors](serverconfiginterface#cors)
* [port](serverconfiginterface#port)

---

## Properties

<a id="bootstrap"></a>

### `Optional` bootstrap

**bootstrap**: *`Function`*

*Defined in [Library/Config/ServerConfigInterface.ts:8](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/ServerConfigInterface.ts#L8)*

___
<a id="cors"></a>

### `Optional` cors

**cors**: *`object`*

*Defined in [Library/Config/ServerConfigInterface.ts:10](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/ServerConfigInterface.ts#L10)*

#### Type declaration

`Optional`  enabled: `boolean`

`Optional`  options: `Options`

___
<a id="port"></a>

### `Optional` port

**port**: *`number`*

*Defined in [Library/Config/ServerConfigInterface.ts:9](https://github.com/Rawphs/stix/blob/f097835/src/Library/Config/ServerConfigInterface.ts#L9)*

___

