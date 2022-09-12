let logCall = function () {
    console.log('logCall was called back');
}

setTimeout(logCall, 3000);

// Another example of a callback 

let students = [
    {name: 'Ed', score: 90, tech: 'JavaScript'},
    {name: 'Gar', score: 77, tech: 'TypeScript'},
    {name: 'Ragde', score: 81, tech: 'Ruby'},
];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].tech.toLowerCase() === "javascript") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed.")
    }
});

let determineTotal = function() {
    let total = 0,
        count = 0;

        processStudents(students, function(obj) {
            total = total + obj.score;
            count++;
        });
        console.log("Total score: " + total + " - Total count: " + count);
};

setTimeout(determineTotal, 3000) //parenthesis ought to be removed so it doesn't invoke straight away


// Problems with callbacks: 
//Callback hell, difficult to reason about, inversion of control (giving control onto something else). 

//Callback hell example//

let item1 = document.getElementById("b1");
if (item1) {
    item1.addEventListener("click", function(e) {
        let a=0,
            b=10;

        setTimeout(function() {
            a++;
            setTimeout(function() {
                a++;
                console.log("1 Attempt: " + a);
            }, 0);
        }, 0);
        setTimeout(function() {
            console.log("2 Attempt: " + a);
        }, 0);
        a=b;
    });
}