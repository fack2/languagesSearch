const http = require("http");
const router = require("./router");
const PORT = process.env.PORT || 4000;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(
    "Server is listening on http://localhost:000. Ready to accept requests!"
  );
});
