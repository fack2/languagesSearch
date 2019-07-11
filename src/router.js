const { homeHandler, searchHandler, publicHandler } = require("./handler");

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("/search=")) {
    searchHandler(request, response, url);
  } else if (url.includes("public")) {
    publicHandler(request, response, url);
  }
};
module.exports = router;
