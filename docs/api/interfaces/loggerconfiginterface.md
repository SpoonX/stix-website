---
title: LoggerConfigInterface
---

# `Interface` LoggerConfigInterface

The Logger config interface extends the logger options from winston. That way, if you choose to extend the Logger class, you can also have access to the correct types without having to import them from another module.

## Hierarchy

 `LoggerOptions`

**↳ LoggerConfigInterface**

## Index

### Properties

* [exceptionHandlers](loggerconfiginterface#exceptionhandlers)
* [exitOnError](loggerconfiginterface#exitonerror)
* [format](loggerconfiginterface#format)
* [level](loggerconfiginterface#level)
* [levels](loggerconfiginterface#levels)
* [silent](loggerconfiginterface#silent)
* [transports](loggerconfiginterface#transports)

---

## Properties

<a id="exceptionhandlers"></a>

### `Optional` exceptionHandlers

**exceptionHandlers**: *`any`*

*Inherited from LoggerOptions.exceptionHandlers*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:80*

___
<a id="exitonerror"></a>

### `Optional` exitOnError

**exitOnError**: * `Function` &#124; `boolean`
*

*Inherited from LoggerOptions.exitOnError*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:78*

___
<a id="format"></a>

### `Optional` format

**format**: *`Format`*

*Inherited from LoggerOptions.format*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:76*

___
<a id="level"></a>

### `Optional` level

**level**: *`string`*

*Inherited from LoggerOptions.level*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:77*

___
<a id="levels"></a>

### `Optional` levels

**levels**: *`Config.AbstractConfigSetLevels`*

*Inherited from LoggerOptions.levels*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:74*

___
<a id="silent"></a>

### `Optional` silent

**silent**: *`boolean`*

*Inherited from LoggerOptions.silent*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:75*

___
<a id="transports"></a>

### `Optional` transports

**transports**: * `Transport`[] &#124; `Transport`
*

*Inherited from LoggerOptions.transports*

*Defined in /Users/rawphs/projects/typescript/stix/node_modules/winston/index.d.ts:79*

___

