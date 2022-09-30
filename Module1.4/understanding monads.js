/* 
Monads are basically functors but with the special power to unwrap any value from its context using the flatMap.
Arrays are monads as you can flat or flatMap them: 
*/

["H", "e", "l", "l", "o"].flat(); // for example
[1, [2], 3].flatMap((val) => val * 2); // returns [2,4,6]

// Fact: Promises are monads and the resolution method then() is a flatMap 

/*
To be considered a monad, the structure has to provide three components:
- type constructor: A feature that creates a monadic type for the underlying type. 
- the unit function that wraps a value of underlying type into a monad
- the bind function that chains the operations on a monadic value. 
*/

//What problem is monad solving?: null and undefined cause havoc in functions that can't handle them, so *Maybe* monad would solve it.

const Identity = x => ({
    emit: () => x,
    chain: f => f(x),
    map: f => Identity(f(x))
});

const one = Identity(1);