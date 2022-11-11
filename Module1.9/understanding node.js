/* Modules */

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
