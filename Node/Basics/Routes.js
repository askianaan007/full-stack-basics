const fs = require("fs"); //here fs is a core modules

const requestHandler = (req, res) => {
  //   console.log(req.url); //this will give the url of the request
  //   console.log(req.method); //this will give the method of the request
  //   console.log(req.headers); //this will give the headers of the request
  //   process.exit(); //this will exit the event loop

  //for send response----
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html"); //this will set the header of the response
    res.write("<html>");
    res.write("<head><title>Enter form details</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value= "send"></form></body>'
    );
    res.write("</html>");
    return res.end(); //this will end the response
  }
  if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log("chunk");
      // console.log(chunk); //this will give the data in chunks
      body.push(chunk);
      console.log(chunk);
    });
    return req.on("end", () => {
      //async code
      const parsedBody = Buffer.concat(body).toString(); //this will give the data in chunks
      const message = parsedBody.split("=");
      fs.writeFile("hello.txt", message[1], (err) => {
        console.log("file write completed");
        res.setHeader("location", "/"); //this will set the location of the response
        res.statusCode = 302; // redirection code for browser
        return res.end();
      });
    });

    // fs.writeFileSync("hello.txt", "dummy"); //this will create a file and write the data in it
  }

  res.setHeader("content-type", "text/html"); //this will set the header of the response
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>hello from node.js server</h1></body>");
  res.write("</html>");
  res.end(); //this will end the response

  //from up to now we create a server and server listen the requests
};

// module.exports = {
//     handler:requestHandler,
//     someText:"printing some text" //we can export more than one functions here
// }

// or

// exports.handler = requestHandler;
// exports.someText = "someText";

//or

module.exports.handler = requestHandler;
module.exports.someText = "someText";
