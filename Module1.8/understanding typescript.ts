/*

Essentially TS offers all of JS features, and an additional layer on top of these. For example JS provides language primitives like string and number
but it doesn't check that you've consistently assigned these. TS does. 

TS knows the JS language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value,
TS will use the value as its type.

Also it's important to state what you want to do and what you want to expect with TS
*/

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Edgar",
  id: 0,
};

// If I provide an object that doesn't match the interface, I'll get a warning from TS

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("Edgar", 1);

// Since JS supports classes and object-oriented programming, so does TS. I can use an interface declaration with classes as per shown above.

// Composing Types
/*
With TS, I can create complex types by combining simple ones, doing so with unions and generics.
With Union, for instance, I can declare what a string or number literal is allowed to be, that a type could be one of many types like so:
*/

type myBool = true | false;
type WindowStates = "open" | "closed" | "minimized";

// Generics
/* 
Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe
the values that the array contains
*/

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// I can also declar my own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// Structural Type System

/*
One of TS core principles is that type checking focuses on the shape that values have. This is sometimes called "duck typing" or "strucutral typing"

In a structural type system, if two objects have the same shape, they are considered to be of the same type:
*/

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26 };
logPoint(point);

/* 
The point variable is never declared to be a Point type. However, TS compares the shape of point to the shape of Point in the type-check.
Since they have the same shape, the code passes. The shape-matching only requires a subset ob the object's fields to match.
There is no difference between how classes and objects conform to shapes:
*/

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(10, 66);
logPoint(newVPoint);

// Decorators

/*
A decorator is a special kind of delcaration that can be attached to a class declaration, method, accessor, property or parameter.
These use the form @expression, where 'expression' must evaluate to a function that will be called at runtime with information about the decored 
declaration

For example given the decorator @sealed we might write the function sealed as follows:
*/
function sealed(target) {
  //do something with target
}

//TS usage examples

interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "katzo";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 7, breed: "Oriental" },
  katzo: { age: 2, breed: "Maine Coon" },
};

cats.katzo;

//

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
