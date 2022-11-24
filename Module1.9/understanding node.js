// Modules //

/*
Advantages:
-Reuse existing code
-Organize my code
-Expose only what will be used
*/

const people = ["yoshi", "mario", "luigi"];
const ages = [20, 21, 22];

module.exports = {
  people,
  ages,
};

// Should I need to use this in a different file, I can do it like this, assuming the file is named 'module':

const something = require("./module");

// extracting a specific property by destructuring

const { people, ages } = require("./module");

// Writing my own module //
/* 
In Node each file is treated as a module 
For instance, I will set a fake app that contains the following:
-https.js
-response.js
-request.js
*/

// request.js can contain the following //

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {
  send,
};

// response.js can contain the following //

function decrypt(data) {
  return "decrypted data";
}
function read() {
  return decrypt("data");
}

module.exports = {
  read,
};

// http.js would loook like this //
const request = require("./request.js");
const response = require("./response.js");

function request(url, data) {
  request.send(url, data);
  return response.read();
}

const data = request("https://google.com", "hi there");
console.log(data);

/* The file system */

const fs = require("fs");

//reading files
fs.readFile("./docs/document.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//writing files

fs.writeFile("./docs/document.txt", "hi people!", () => {
  console.log("file was written"); // the second argument is what gets written. If no file exists, it will be created
});

//directories

if (!fs.existsSync("./assets")) {
  // validates if directory exists, if not, it will be created
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory deleted");
  });
}

//deleting files

if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file got deleted");
  });
}

/* Streams & Buffer: we start using data before it has finished loading */

const readStream = fs.createReadStream(".docs/documentTwo.txt", {
  encoding: "utf-8",
}); //utf8 is a readable format

readStream.on("data", (chunk) => {
  console.log(chunk); //this is an event listener to receive a buffer of data
});

/* Clients & Servers */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made!");
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

/* Requests & Responses */

const http = require("http");
const fs = require("fs");

const server2 = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  //send an html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// Another example being more secure with best practices at destructuring //

const { request } = require("https"); //This module also has 'get' as a method I can use
const { publicDecrypt } = require("crypto");

const req = request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});
req.end();

//Event Loop//
/*
It allows node to handle callbacks functions so it executes async code successfully. Basically so node can do a lot of stuff at the same time.
The actual loop happens in Libuv.

Here's an example
*/

while (!shouldExit) {
  processEvents(); // if there is no event, the program waits until there is one. When it's over processing all callbacks, it will start again.
}

//Callback queues//
/*
New callbacks are added from bottom to top, first in, first out; in order for Node to orderly execute callbacks in a reasonable amount of time 
without interrupting each other. This example can be demonstrated using setTimeout for instance.
*/

/*
Event Loop phases:
-Timers (setTimeout or setInterval for example)
-I/O callbacks (network & file operations for example)
-setImmediate (they run immediately after any I/O operation has finished)
-Close callbacks (a callback that executes when a connection is closed for example)

After the last phase, the event loop starts all over again. 

Node despite being single threaded, it handles many requests by delegating or passing off requests, ensuring a non-blocking I/O. No needs for webservers unlike with
PHP and Python. Node was built especifically to work with async non-blocking I/O. Node is really good at servers, coordination among servers and DBs.
*/

//
