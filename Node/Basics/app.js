const http = require("http"); //here http is a core modules
const routes = require("./Routes")

  // we separate these content in to the routes,js file
  console.log(routes.someText)

const server = http.createServer(routes.handler); //create server will create server only
server.listen(3000);