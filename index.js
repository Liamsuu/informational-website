let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename;
    if (q.pathname === "/") {
      filename = "index.html";
    } else {
      filename = `.${q.pathname}.html`;
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (err, errData) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          if (err) {
            // just send generic 404 message if 404.html is also not found for whatever reason
            res.write("<h1>404 Not Found</h1>");
          } else {
            res.write(errData);
          }
          return res.end();
        });
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
