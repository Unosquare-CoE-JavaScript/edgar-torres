/* Promise: object with properties and methods. It represents eventual completion (or failure) of an async op
 lastly, it provides a resulting a value */

asyncFunction()
   .then(function (val) {
      console.log('Nice stuff! ' + val);
      return asyncFunction2();
   })
   .then(function (val) {
      console.log('Second promise here: ' + val);
   });


// Another example using Star Wars api //

const swapi = (num) => {
      const url = 'https://swapi.dev/api/people/';

   fetch(url + num, {method: 'GET'})
      .then(data => data.json())
      .then(obj => {
         console.log(obj)
         return fetch(obj.data.homeworld);
      })
      .then(hwdata => hwdata.json())
      .then(hwobj => console.log(hwobj));
};

swapi(1);

// Another example using jsonPlaceholder //

const todo = {
   completed: false,
   userId: 1,
   title: "Something here"
};

fetch('https://sonplaceholder.typicode.com/todos/', {
   method: 'POST',
   headers: {
      "Content-type": "application/json",
   },
   body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create to-do, ${reject}`));

