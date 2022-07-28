# JS YDKJSY

## Chapter 1: About JS

Essentially there is a group of individuals that gather together every other month to discuss new features and such for JS. Once these ideas get to the 4th stage of consideration, the idea will then be considered to be included in once of the yearly releases. JS consists of only one version so it’s the same JS everywhere I go. For some people it may seem inconsistent but JS can only be seem different in how environment behaviour work with it.

Essentially, JS is not forwards-compatible. For instance, backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid, while its counterpart refers that if a new addition to the language results suddenly included, it would not cause the program to break if it were run in an older JS engine. HTML and CSS however are forwards compatible, so if you dug up some code written back in 1995, it’s highly likely it wouldn’t work quite alright today.

It’s strongly recommended. That developers use the latest version of JS so that their code is clean and communicates its ideas most effectively. Developers should focus on writing the clean, new syntax forms, and let the tools take care of producing a forwards-compatible version of that code that is suitable to deploy and run on the oldest-supported JS engine environments.

JS source code is pared before it is executed, so you can say JS is a parsed language.
JS is also a multi-paradigm language, meaning the syntax and capabilities allow a developer to mix and match concepts from various major paradigms such as procedural, object-oriented and functional.

### About Strict mode:

Strict mode shouldn’t be thought of as a restriction on what you can’t do, but rather as a guide to the best way to do things so that the JS engine has the best chance of optimising and efficiently running the code. It’s just a reminder of how JS should be written to have the highest quality and best chance at performance.

## Chapter 2: Each file is a program

The most fundamental unit of information in a program is a value. Values are data and they come in two forms in JS: primitive and object.

greeting(“My name is Edgar.”);

The former is a primitive string literal.

Besides primitives, there are also object values like arrays and objects:

<img width="356" alt="screenshot 2" src="https://user-images.githubusercontent.com/108761141/180851694-2d648afa-f6c9-4ea5-9047-81ee90135565.png">

Function in JS are a special type of the object value type. Not all languages treat functions as values but it’s essential for a language to support the functional programming pattern as JS does.

<img width="238" alt="screenshot 3" src="https://user-images.githubusercontent.com/108761141/180851701-81664030-efdd-4a0f-acb5-af32e2a14923.png">

### How we organise in JS:
Two major patterns for organising code (data and behaviour) are used broadly across the JS ecosystem: classes and modules.

When it comes to classes, the terms “object-oriented”, “class-oriented”, and “classes” are very loaded full of detail and nuance; they’re not universal in definition.

Consider the following example of a class:

<img width="387" alt="screenshot 4" src="https://user-images.githubusercontent.com/108761141/180851708-d8524f97-8f6b-46ca-93fc-bc2941e85893.png">

### Class inheritance: 

Useful for code reusability by reusing properties and methods of an existing class when you create a new class
To create a class inheritance, use the extends keyword.
super() refers to a parent class. We call the parent’s constructor method and gets access to the parent’s properties and methods.

<img width="598" alt="screenshot 5" src="https://user-images.githubusercontent.com/108761141/180851734-7b8f4f50-6f4a-45e1-9c9b-4717713f408f.png">

### Classic modules:

An outer function that runs at least once, which returns an instance of the module with the one or more functions exposed that an operate on the module instance’s internal (hidden) data.

<img width="385" alt="screenshot 6" src="https://user-images.githubusercontent.com/108761141/180851749-3d15da62-147a-4ea4-862d-0b7ef8ebabed.png">

### ES Modules:

These are meant to serve much the same spirit and purpose as the existing classic modules. The difference is that there is no wrapping function to define a module; the wrapping context is a file, one file; one module. Also you don’t interact with a module’s “API” explicitly but rather use the export keyword to add a variable or method to its public API definition. If something is defined in a module but not exported, then it stays hidden. Lastly, you don’t “instantiate” an ES module, you just import it to use its single instance.

## Chapter 3: JS core in depth

### Iteration: 

Standardized approach for consuming data from a source one chunk at a time. Pretty commonly used in a loop. Iterations contain iterables which are essentially values that can be iterated over. An example of an iterable can be an array.

### Closure: 

When a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope. Objects don't get closures but functions do. For instance when a function performs its duty, one would expect to be garbage collected but it is not the case and the reason is closure. If I set up a variable for a function, it will be preserved as a direct link. Closures are most common when workng with async code, such as with callbacks. 

<img width="429" alt="Screenshot 2022-07-27 at 6 11 47 PM" src="https://user-images.githubusercontent.com/108761141/181388155-505abcd1-17e5-4256-9cbf-da52334ba522.png">

For example, the inner function onResponse() is closed over url and thus preserves and remembers it until the Ajax call returns and executes onResponse(). Even though getSomeData() finishes right away, the url param is kept alive in the closure for as long as needed. 

### this Keyword: 

Functions have a characteristic besides their scope that influences what they cna access. It is best described as execution context and it's exposed to the function via its this keyword. Essentially this is a function and it returns the global object as default. However in a browser the global object is [object Window]. Strict mode however does not allow default binding, so when used in a function, this is undefined. Basically to determine which object this refers to, bind(), apply(), call(), object method and global scope must be considered individually. 

## Chapter 4: The bigger picture

### Scope and closure:

Essentially JS is lexically scoped because of two particular characteristics of its model that are not present in other lexically scoped languages. The first is hoisting: when all variables declared anywhere in a scope are treated as if they're declared at the beginning of the scope. It's worth mentioning let and const have a peculiar error behavior called "temporal dead zone" which results in observable but unusable variables. The second one is closure: a natural result of lexical scope when the language has functions as first-class values. When a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it maintains access to its original scope variables; this is closure. 

### Types and coercion:

JS devs should learn more about types and should learn more about how JS manages type conversions, which is ofter overlooked by the community. Yet, this doesn't make JS bad at all. 

Type coercion can be explicit and implicit. When a dev expresses the intention to convert between types by writing specific code, like Number(value), it's called explicit type coercion. Since JS is a weakly-typed language, values can also be converted between different types automatically and it is called implicit type coercion. The latter usually happens when you apply operators to values of different types like 
1 == null, 2/'5', null + new Date(). 

<img width="435" alt="Screenshot 2022-07-28 at 1 30 25 PM" src="https://user-images.githubusercontent.com/108761141/181612053-f9040e6b-7a16-49f0-beb9-e45971363af3.png">

### This should mark the end of first JS book. Text and sentences have been paraphrased in order to allow further visits for a solid grasp. 

