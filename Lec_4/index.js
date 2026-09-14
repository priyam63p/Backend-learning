const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("Hello,Welcome to our website");
  if (req.url === "/") {
    res.end("Welcome to our website");
  } else if (req.url === "/contact") {
    res.end("Welcome to contact page");
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Listening at port number 4000");
});
