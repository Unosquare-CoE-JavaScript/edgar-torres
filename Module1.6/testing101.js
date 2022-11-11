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
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

module.exports = mathOperations;

// The test

describe("Calulator tests", () => {
  TextDecoderStream("adding 1+2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

// A different example of a test in React

import { render, screen } from "@testing-library/react";
import App from './App';

test('button has correct initial colour', () => {
  render (<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colourButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colourButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render (<App />);
  const colourButton = screen.getByRole('button', {name: 'Change to blue'}); 
  fireEvent.click(colourButton); //Imported from testing library 
  expect(colourButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colourButton).toHaveTextContent('Change to red'); 
});

// Prop tip: All expectations shouldn't be in the same test file

// Unit Testing Functions
/* 
It's adviseable to unit test if:
- Code is too complex or simply difficult to test via functional tests
- Too many edge cases
- Useful to determined what caused functional tests to fail
*/

// ESLint and Prettier

/* 
ESLint:
- Linter: Analyzes static text and marks syntax that breaks rules
- Static: Analyzes code as written, not what happens when code is run
- Linting keeps code style consistent, especially for multi-eng projects
- Catches errors in code
- Testing library and jest-dom ESlint plugins enforce best practices

Prettier:
- Formatters automatically format code (indents, spacing), like adding missing space around curly braces.
*/

/*
Useful Debugging tips:
- screen.debut()
- import logRoles from the testing library
*/

/*
Useful testing tips:
- Test small pieces of code in isolation
- Follow Arrange, Act, Assert = Arrange thins for testing, then acting upon it and then assert if the hypothesis is correct
- Keep them short
- Make them simple
- Test edge cases, as in test if the code throws exceptions when it should, for example.
- Write tests before fixing bugs
- Make them performant
- Keep them stateless
- Write deterministic tests
- Use descriptive names
- Test one requirement at a time
- Run tests automatically
*/