const express = require("express");
const server = express();
const  router  = require("./src/router/Router.js");
const PORT = process.env.API_PORT || 3000;
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(router);

server.listen(PORT, () => {
  console.log(`Server Active at http://localhost:${PORT}`);
});
