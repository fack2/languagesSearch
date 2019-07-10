const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(process.env.PORT || 4000, () => {
  console.log(
    "Server is listening on http://localhost:000. Ready to accept requests!"
  );
});
