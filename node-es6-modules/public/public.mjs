import url from "url";
import http from "http";

import { getFileContent } from "./utils.mjs";

const server = http.createServer((req, res) => {
  let urlPath = url.parse(req.url).pathname;

  if (urlPath === "/") {
    urlPath = "index.html";
    getFileContent(urlPath, res).then(({ contentType, content }) => {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    });
  }

  if (urlPath === "/products") {
    urlPath = "./src/products.json";
    res.writeHead(200, { "Content-Type": "application/json" });
    getFileContent(urlPath, res).then(({ contentType, content }) => {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    });
  }

  getFileContent(urlPath, res).then(({ contentType, content }) => {
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  });
});
server.listen(8080);
console.log("Server running at http://localhost:8080/");
