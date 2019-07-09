const fs = require("fs");
const path = require("path");

const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, "../public/index.html");
  console.log("filePath", filePath);
  const html = fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log("error");
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>server Error</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      console.log("hell");
      response.end(file);
    }
  });
};
module.exports(homeHandler);
