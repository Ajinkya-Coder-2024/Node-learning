// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

// console.log(process.argv[2]);

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + "/hellow" + i + ".txt", "a Simple file " + i);
}
