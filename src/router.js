const { homeHandler, searchHandler, publicHandler } = require("./handler");

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    homeHandler(request, response);
  } else if (url.indexOf("/search=") !== -1) {
    searchHandler(request, response, url);
  } else if (url.indexOf(".") !== -1) {
    publicHandler(request, response, url);
  }
};
module.exports = router;
