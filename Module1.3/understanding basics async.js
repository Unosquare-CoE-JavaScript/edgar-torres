// Async example //

// Basic example of how async works, everything will run one line of code at a time

const test = function () {
    setTimeout(function () {
        console.log('First turn');
        alert('Now it is me!');
        console.log('Third turn, now it is my turn');
    }, 2000)
};

const test2 = function () {
    console.log('I am in another function');
};

test();
test2();


// Advantages: it's fast, eliminates code blocking and it can be difficult to reason about, question mark. 
// Event Loops Purpose: Make sure all code is being handled. 