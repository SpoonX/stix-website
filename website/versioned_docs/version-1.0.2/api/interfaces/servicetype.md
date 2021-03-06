---
title: ServiceType
id: version-1.0.2-servicetype
original_id: servicetype
---

# `Interface` ServiceType

## Type parameters
#### T 
## Hierarchy

 `Function`

**↳ ServiceType**

## Index

### Constructors

* [constructor](servicetype#constructor)

### Properties

* [Function](servicetype#function)
* [arguments](servicetype#arguments)
* [caller](servicetype#caller)
* [length](servicetype#length)
* [name](servicetype#name)
* [prototype](servicetype#prototype)

### Methods

* [__@hasInstance](servicetype#___hasinstance)
* [apply](servicetype#apply)
* [bind](servicetype#bind)
* [call](servicetype#call)
* [toString](servicetype#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

**new ServiceType**(...args: *`any`[]*): `T`

*Defined in [Library/ServiceManager/ServiceManagerConfigInterface.ts:3](https://github.com/SpoonX/stix/blob/8c44541/src/Library/ServiceManager/ServiceManagerConfigInterface.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `T`

___

## Properties

<a id="function"></a>

###  Function

**Function**: *`FunctionConstructor`*

**

___
<a id="arguments"></a>

###  arguments

**arguments**: *`any`*

*Inherited from Function.arguments*

**

___
<a id="caller"></a>

###  caller

**caller**: *`Function`*

*Inherited from Function.caller*

**

___
<a id="length"></a>

###  length

**length**: *`number`*

*Inherited from Function.length*

**

___
<a id="name"></a>

###  name

**name**: *`string`*

*Inherited from Function.name*

**

Returns the name of the function. Function names are read-only and can not be changed.

___
<a id="prototype"></a>

###  prototype

**prototype**: *`any`*

*Inherited from Function.prototype*

**

___

## Methods

<a id="___hasinstance"></a>

###  __@hasInstance

**__@hasInstance**(value: *`any`*): `boolean`

*Inherited from Function.[Symbol.hasInstance]*

**

Determines whether the given value inherits from this function if this function was used as a constructor function.

A constructor function can control which objects are recognized as its instances by 'instanceof' by overriding this method.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `boolean`

___
<a id="apply"></a>

###  apply

**apply**(this: *`Function`*, thisArg: *`any`*, argArray?: *`any`*): `any`

*Inherited from Function.apply*

**

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `Function` |
| thisArg | `any` |  The object to be used as the this object. |
| `Optional` argArray | `any` |  A set of arguments to be passed to the function. |

**Returns:** `any`

___
<a id="bind"></a>

###  bind

**bind**(this: *`Function`*, thisArg: *`any`*, ...argArray: *`any`[]*): `any`

*Inherited from Function.bind*

**

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `Function` |
| thisArg | `any` |  An object to which the this keyword can refer inside the new function. |
| `Rest` argArray | `any`[] |  A list of arguments to be passed to the new function. |

**Returns:** `any`

___
<a id="call"></a>

###  call

**call**(this: *`Function`*, thisArg: *`any`*, ...argArray: *`any`[]*): `any`

*Inherited from Function.call*

**

Calls a method of an object, substituting another object for the current object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `Function` |
| thisArg | `any` |  The object to be used as the current object. |
| `Rest` argArray | `any`[] |  A list of arguments to be passed to the method. |

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

**toString**(): `string`

*Inherited from Function.toString*

**

Returns a string representation of a function.

**Returns:** `string`

___

