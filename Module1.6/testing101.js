// Test Driven Development

/* 
- Write tests before writing codes, then write code according to tests
- "Red-green" testing, as tests fail before code is written. 
   + Write "shell" function
   + Write tests
   + Tests fail
   + Write code
   + Tests pass

Why TDD?
- It's part of the coding process, not a "chore"
- More efficient

Types of tests:
- Unit Tests = test one unit of code in isolation
- Integration = How multiple units work together
- Functional = Tests a particular function of software-- it tests its behaviour
- Acceptance / E2E tests = Use actual browser and server (like Cypress)

*/

// Unit vs Functional testing comparison

/* 
Unit testing:
- Isolated: mock dependencies, test internals.
- Easy to pinpoint failures
- Further from how users interact with software
- More likely to break with refactoring

Functional testing:
- Include all relevant units, test behaviour.
- Close to how users interact with software
- Robust tests
- More difficult to debug failing tests
*/

// Unit testing example with Jest 

const mathOperations = {
    sum: function(a,b) {
        return a+b;
    },
    diff: function(a,b) {
        return a-b;
    },
    product: function(a,b) {
        return a*b;
    }
}

module.exports = mathOperations

// The test

describe("Calulator tests", () => {
    TextDecoderStream('adding 1+2 should return 3', () => {
        expect(mathOperations.sum(1,2)).toBe(3);
    });
})

