import fs from "fs";
import path from "path";

export const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

export const getFileContent = (filePath, res, cb) =>
  new Promise((resolve, reject) => {
    try {
      const extname = String(path.extname(filePath)).toLowerCase();
      const contentType = mimeTypes[extname] || "application/octet-stream";

      fs.readFile(`./${filePath}`, (error, content) => {
        if (error) {
          if (error.code == "ENOENT" && contentType == mimeTypes[".html"]) {
            res.writeHead(404, { Location: "404.html" });
            res.end();
          } else if (error.code == "ENOENT") {
            res.writeHead(301);
            res.end();
          } else {
            res.writeHead(500);
            res.end(
              "Sorry, check with the site admin for error: " +
                error.code +
                " ..\n"
            );
          }
          reject(error);
        }
        resolve({ contentType: contentType, content: content });
      });
    } catch (err) {
      console.log("Error thrown", err);
    }
  });
