const fs = require("fs");
const path = require("path");

const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, "/../public/index.html");
  const html = fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>server Error</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const searchHandler = (request, response, url) => {
  const s = url.split("=")[1];
  const filePath = path.join(__dirname, "./", "data/db.json");
  fs.readFile(filePath, "utf-8", (err, file) => {
    if (err) console.log(err);
    else {
      response.writeHead(200, { "Content-Type": "application/json" });
      let arr = JSON.parse(file);
      const ar = [];
      s.toUpperCase();
      arr.forEach(element => {
        // console.l og(element.name);

        if (element.name.indexOf(s) !== -1) {
          ar.push(element);
        }

        // ar.push(element);
      });
      //   console.log("000000000000000000000000000000000");
      //   const jso = arr.filter(x => {
      //     console.log(x.name == "Arabic");
      //     x.name == "Arabic";
      //   });
      // console.log(ar);

      response.end(JSON.stringify(ar));
    }
  });
};
const publicHandler = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
    png: "image/png",
    ico: "image/x-icon"
  };
  const filePath = path.join(__dirname, "../public", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>this is error message should be</h1>");
    } else {
      console.log("extensionType", extension);

      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
};

module.exports = { homeHandler, searchHandler, publicHandler };
