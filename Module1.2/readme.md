#JS YDKJSY Scope & Closures

## Chapter 1: What's the scope?

Scope is primarily determined during compilation. Essentially a program is processed by a compiler in three basic stages:

1. Tokenizing/Lexing: breaking up a string of characters into meaninful chunks called tokens. For example var a = 2 would be broken up into var, a, =, 2 and ;. Whitespace might persist whether it's meaningful or not.

2. Parsing: taking a stream of tokens and turning it into a tree of nested elements, which essentially repreent the grammatical structure of the program. This is called Abstract Syntax Tree (AST). For example, var a = 2; might start with a top-level node called VariableDeclaration, with a child node called Identifier and another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2).

3. Code Generation: Taking an AST and turning it into executable code. The JS engine takes the AST for var a = 2; and turns it into a set of machine instructions to actually create a variable called a (including reserving memory) and then store a value into a.
