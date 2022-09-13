
// Function Total: For every input there is a corresponding output

const inc = i => {
    if (i === 0) return 1
    if (i === 1) return 2
    if (i === 2) return 3
    return 100
};

// Deterministic: ALways receive the same output for a given input

const getDifference = (now, then) => {
    const days = Math.abs(now.getDate() - then.getDatge())
    const hours = Math.abs(now.getHours() - then.getHours())
    return { days, hours }
};

const timeSince = comment => {
    const now = new Date();
    const then = new Date(comment.createAt)
    return getDifference(now, then)
};


// No side effects: no observable effects besides computing a value. If any, it is not a function.

const add = (x, y) => {
    console.log(`Adding ${x} ${y}`)
    return x + y
};


// Examples: !function

const signUp = (attributes) => {
    let user = saveUser(attributes)
    welcomeUser(user)
};

const parseQuery = () => location.search.substring(1).split('&').map(x => x.split('=')) //no args so !function


// Examples: function

const signUp2 = (attributes) => {
    return () => {
        let user = saveUser(attributes)
        welcomeUser(user)
    };
};

const shout = word => word.toUpperCase().concat('!'); // reliable and inmutable 


/*
Why pure functions?
-Reliable
-Portable
-Reusable
-Testable
-Composable
-Properties/contract
*/
