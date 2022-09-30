/*
Currying is a transformation of functions that translates a function from callable as f(a, b, c) 
into callable as f(a)(b)(c). Currying doesn’t call a function. It just transforms it.

*/

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); // 3

  // Another example //

/*
For instance, we have the logging function log(date, importance, message) that formats and 
outputs the information:
*/

function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

// So if we curry the previous block...

log = _.curry(log);

// Log will work normally after this:
log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

// But also works in the curried form:
log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// usage
logNow("INFO", "message"); // [HH:mm] INFO message

/*
Now logNow is log with fixed first argument, in other words “partially applied function”.
I can go further and make a convenience function for current debug logs:
*/

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message


//Result//

/*
We didn’t lose anything after currying: log is still callable normally.
We can easily generate partial functions such as for today’s logs.
*/