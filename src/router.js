const { homeHandler } = require("./handler");

const router = (request, response) => {
  const url = request.url;
};
if (url === "/") {
  homeHandler(request, response);
}
module.exports = router;
