#JS YDKJSY Scope & Closures

## Chapter 1: What's the scope?

Scope is primarily determined during compilation. Essentially a program is processed by a compiler in three basic stages:

1. Tokenizing/Lexing: breaking up a string of characters into meaninful chunks called tokens. For example var a = 2 would be broken up into var, a, =, 2 and ;. Whitespace might persist whether it's meaningful or not.

2. Parsing: taking a stream of tokens and turning it into a tree of nested elements, which essentially repreent the grammatical structure of the program. This is called Abstract Syntax Tree (AST). For example, var a = 2; might start with a top-level node called VariableDeclaration, with a child node called Identifier and another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2).

3. Code Generation: Taking an AST and turning it into executable code. The JS engine takes the AST for var a = 2; and turns it into a set of machine instructions to actually create a variable called a (including reserving memory) and then store a value into a.

It's important to consider and to remember JS engines don't have the luxury of an abundance of time to perform their work and optimizations, because compilations doesn't happen in a build step ahead of time as with other languages. It happens in microseconds right before the execution. To ensure the fastest performance under these contraints, Js engines use all kinds of tricks like JITs, which lazy compile and even hot recompile.

### Required: Two phases

The most important observation we can make about processing of JS programs is that it occurs in at least two phases, parsing/compilation first, then execution.

Essentially parsing the code would be the only way to discover or notice errors before execution as JS typically does.

### Hoisting

function saySomething() {
const greeting = "Hello";
{
greeting = "Yo!";
let greeting = "Hi!";
console.log(greeting);
}
}
saySomething();
// Reference error: cannot access 'greeting' before initialization

The only way the JS engine could know at the line where the error is thrown, that the net statemente would declare a block-scoped variable of the same name, is if the JS engine had already processed this code and their variables. This processing of scopes and declarations can only accurately be accomplished by parsing the program before execution.

### Lexical Scope

It should be clear that scope is determined as the program is compiled and shouldn't generally be affected by runtime conditions. Also it's demonstrated that JS's scope is determined at compile time; the term for this kind of scope is "lexical scope". For instance, if you place a variable declaration inside a function, the copiler handles this declaration as it's parsin the function, and associates the declaration with the function's scope. If a variable is block-scope declared (let / const), then it's associated with the nearest enclosing { .. } block, rather than its enclosing function (as with var).

## Chapter 2: Illustrating Lexical Scope

One metaphor that can be found effective in understanding scope is sorting colored marbles into buckets of their matching color. In this metaphor, the marbles are the variables and the buckets are scopes (functions and blocks).

<img width="423" alt="scope illus" src="https://user-images.githubusercontent.com/108761141/186535225-3f22134b-9dcd-4d4e-8a3e-85a5020c5208.png">

Scope bubbles are determined during compilation based on where the functions/blocks of scope are written, the nesting inside each other and so on. Each scope bubble is entirely container within its parent scope bubble--a scope is never partially in two different outer scopes.

### Nested Scope

If the variable is a source, an unresolved identifier lookup is considered an undeclared variable, which always results in a ReferenceError. Also if the variable is a target, and the code at that moment is running in strict-mode, the variable is considered undeclared.

The error message for an undeclared variable condition, in most JS environments will look like "Reference Error, XYZ is not defined". "Not defined" really means "not declared" or rather "undeclared", as in a variable that has no matching formal declaration in any lexically available scope. By contrast, "undefined" really means a variable was found but the variable otherwise has no other value in it at the moment, so it defaults to "undefined".

Working in strict-mode is the most general recommended idea to avoid global variables for instance, also always formally declare variables.

## Chapter 3: The Scope Chain

### Arrow Functions

ES6 added an additional function expression form to the language such as the subtitle says. The arrow function doesn't required the word function to define it, also the (..) around the parameter list is optional in some simple cases. Likewise, the {..} around the function body is optional in some cases, and when the {} are omitted, a return value is sent out without using a return keyword. AF are lexically anonymous, meaning they have no directly related identifier that reference the function. AF achieve theyr syntactic brevity at the expense of having to mentally juggle a bunch of variations for different forms/conditions. Other than being anonymous (and having no declarative form), AF have the same lexical scope rules as function functions do.

## Chapter 4: Around the Global Scope

In short words, the global scope is where:

- JS exposes its built'ins:

  - primitives: undefined, null, infinity, NaN
  - natives: Date(), Object(), String(), etc.
  - global functions: eval(), parseInt(), etc.
  - namespaces: Math, Atomics, JSON
  - friends of JS: Intl, WebAssembly

- The environment hosting the JS enginer exposes its own built-ins:
  - console(and its methods)
  - the DOM
  - timers
  - web platform APIs: navigator, history, geolocation, WebRTC, etc.

These are some of the many globals a program will interact with. Global scope shouldn't be a dumping ground for every variable in an application.

### Web Workers

These are a web platform extension on top of browser JS behaviour, which allows a JS file to run in a completely separate thread, from the thread that's running the main JS program. Since these WW progrms run on a separate thread, they are restricted in their communications with the main application thread, to avoid race conditions and other complications. WW code does not have access to the DOM. Some web APIs are made available to the worker, such as navigator.

Just as with main JS programs, var and function declarations create mirrored properties on the global object (aka, self) where other declarations (let, const) do not.

### ES Modules (ESM)

ES6 introduced first-class support for the module pattern. One of the most obvious impacts of using ESM is how it changes the behaviour of the observably top-level scope in a file. If a code in a file that's loaded as an ES module, it will still run exactly the same, but the observable effects will be different. ESM encourages a minimization of reliance on the global scope, where your import whatever module you may need for the current module to operate. As such, you less often see usage of the global scope or its global object.

## Chapter 5: The not so secret lifecycle of variables

### Hoisting: Declaration vs Expression

Rather than hoisting being a concrete execution step the JS engine performs, it's more useful to think of hoisting as a visualization of carious actios JS takes in setting up the program _before execution_.

The typical assertion of what hoisting means: lifting -- like lifting a heavy weight upward -- any identifiers all the way to the top of a scope.The explanation often asserted is that the JS engine will actually rewrite that program before execution, so that it looks like this:

    var greeting; // hoisted declaration
    greeting = 'hi!"; // the original line 1
    console.log(greeting); // hi!
    greeting = 'hello!" // var is gone

Hoisting as a mechanism for re-ordering code may be an attractive simplification, but it's not accurate. The JS engine doesn't actually re-arrange the code. It can't magically look ahead and find declarations; the only way to accurately find them, as well as all the scope boundaries in the program, would be to fully parse the code. Since Hoisting is about registering a variable at the beginning of a scope, there's nothing to be done in the middle of the scope where the original program actually had a second variable set.

### Uninitialized Variables (TDZ)

With var declarations, the variable is "hoisted" to the top of its scope, but it's automatically initialized to the undefined value. However let and const declarations are not quite the same in this respect. The TDZ is the time window where a variable exists but is still uninitialized, therefore cannot be accessed in any way. Var also has technically a TDZ, but it's zero in length and thus unobservable to our programs. Only let and const have an observable TDZ. It's important to remember let and const do hoist. The difference is that let and const do not automatically initialize at the beginning of the scope, they do in some way but don't autoinitialize. The advice here is to reduce the TDZ window to zero by declaring variables at the top at most times.

## Chapter 7: Closures

It's important to hide our variable and function declarations in the lowest (most deeply nested) scopes possible. Let and const are scoped declarators.

Closure is a behaviour of functions and only functions. For closure to be observed, a function must be invoked and specifically it must be invoked in a different branch of the scope chain from where it was originally defined.

consider:

function lookupStudent(studentID) {
var students = [
{id: 14, name: "Ed"},
{id: 11, name: "Gar"},
];

    return function greetStudent(greeting) {
        var student = students.find(student => student.id == studentID);
    };

        return `${greeting}, ${student.name}!`
    };

};

While greetSduent() does receive a single argument as the parameter name greeting, it also makes reference to both students and studentID, identifiers which come from the enclosing scope of lookupStudent(). Each of those references from the inner function to the variable in an outer scope is called a _closure_

Closure allows greetStudent() to continue to access those outer variables even after the outer scope is finished (when each call to lookupStudent() completes). Instead of the instances of students and studentID being garbage collected, they stay around in memory.

If JS functions did not have closure, the completion of each lookupStudent() call would immediately tear down its scope and garbage collect the students and studentID variables.

Closures are most commonly encountered with callbacks.

function lookupStudentRecord(studentID) {
    ajax(`https://some.api/student/${studentID}`,
    function onRecord(record) {
        console.log(`${record.name} (${studentID}`)
    }
}

the onRecord() callback is going to be invoked at some point in the future, after the response from the Ajax call comes back. This invocation will happen from the internals of the Ajax() utility, wherever that comes from. Furthermore, when that happens the lookupStudentRecord() call will long since have completed. Why then is studentID still around and accessible to the callback? *Closure*

Essentially, a closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible. To be considered:
- Must be a function involved
- Must reference at least one variable from an outer scope
- Must be invoked in a different branch of the scope chain from the variable(s).

## Chapter 8: The Module Pattern

A module is a collection of related data and functions, characterized by a division between hidden private details and public accessible details, usually called the public API. A module is also stateful, meaning it maintains information over time, along with functionality to access and update that information. 
