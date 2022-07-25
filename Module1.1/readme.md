JS YDKJSYT

- [ ] Chapter 1: About JS
      Essentially there is a group of individuals that gather together every other month to discuss new features and such for JS. Once these ideas get to the 4th stage of consideration, the idea will then be considered to be included in once of the yearly releases. JS consists of only one version so it’s the same JS everywhere I go. For some people it may seem inconsistent but JS can only be seem different in how environment behaviour work with it.

Essentially, JS is not forwards-compatible. For instance, backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid, while its counterpart refers that if a new addition to the language results suddenly included, it would not cause the program to break if it were run in an older JS engine. HTML and CSS however are forwards compatible, so if you dug up some code written back in 1995, it’s highly likely it wouldn’t work quite alright today.

It’s strongly recommended. That developers use the latest version of JS so that their code is clean and communicates its ideas most effectively. Developers should focus on writing the clean, new syntax forms, and let the tools take care of producing a forwards-compatible version of that code that is suitable to deploy and run on the oldest-supported JS engine environments.

JS source code is pared before it is executed, so you can say JS is a parsed language.
JS is also a multi-paradigm language, meaning the syntax and capabilities allow a developer to mix and match concepts from various major paradigms such as procedural, object-oriented and functional.

- [ ] About Strict mode:
      Strict mode shouldn’t be thought of as a restriction on what you can’t do, but rather as a guide to the best way to do things so that the JS engine has the best chance of optimising and efficiently running the code. It’s just a reminder of how JS should be written to have the highest quality and best chance at performance.

- [ ] Chapter 2: Each file is a program
      The most fundamental unit of information in a program is a value. Values are data and they come in two forms in JS: primitive and object.

greeting(“My name is Edgar.”);

The former is a primitive string literal.

Besides primitives, there are also object values like arrays and objects:

<img width="356" alt="screenshot 2" src="https://user-images.githubusercontent.com/108761141/180851694-2d648afa-f6c9-4ea5-9047-81ee90135565.png">

Function in JS are a special type of the object value type. Not all languages treat functions as values but it’s essential for a language to support the functional programming pattern as JS does.

<img width="238" alt="screenshot 3" src="https://user-images.githubusercontent.com/108761141/180851701-81664030-efdd-4a0f-acb5-af32e2a14923.png">

- [ ] How we organise in JS:
      Two major patterns for organising code (data and behaviour) are used broadly across the JS ecosystem: classes and modules.

When it comes to classes, the terms “object-oriented”, “class-oriented”, and “classes” are very loaded full of detail and nuance; they’re not universal in definition.

Consider the following example of a class:

<img width="387" alt="screenshot 4" src="https://user-images.githubusercontent.com/108761141/180851708-d8524f97-8f6b-46ca-93fc-bc2941e85893.png">

- [ ] Class inheritance: useful for code reusability by reusing properties and methods of an existing class when you create a new class
      To create a class inheritance, use the extends keyword.
      super() refers to a parent class. We call the parent’s constructor method and gets access to the parent’s properties and methods.

<img width="598" alt="screenshot 5" src="https://user-images.githubusercontent.com/108761141/180851734-7b8f4f50-6f4a-45e1-9c9b-4717713f408f.png">

Classic modules:
An outer function that runs at least once, which returns an instance of the module with the one or more functions exposed that an operate on the module instance’s internal (hidden) data.

<img width="385" alt="screenshot 6" src="https://user-images.githubusercontent.com/108761141/180851749-3d15da62-147a-4ea4-862d-0b7ef8ebabed.png">

ES Modules:
These are meant to serve much the same spirit and purpose as the existing classic modules. The difference is that there is no wrapping function to define a module; the wrapping context is a file, one file; one module. Also you don’t interact with a module’s “API” explicitly but rather use the export keyword to add a variable or method to its public API definition. If something is defined in a module but not exported, then it stays hidden. Lastly, you don’t “instantiate” an ES module, you just import it to use its single instance.
