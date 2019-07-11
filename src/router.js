const { homeHandler, searchHandler, publicHandler } = require("./handler");

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("/search=")) {
    searchHandler(request, response, url);
  } else if (url.includes("public")) {
    publicHandler(request, response, url);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 page not found!</h1>");
  }
};
module.exports = router;
