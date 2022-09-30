/* 
Essentially a composition is that everything must be composed / connected. In other words, composition is dot chaining. 
It’s used as a technique that enables reusability on the highest level.
*/

const doStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
);

// another example 

const doStuff2 = str => 
str
.toLowerCase()
.split(' ')
.map(c => c.trim())
.reverse()
.filter(x => x.length > 3)
.join('')