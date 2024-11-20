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

//list show file list code
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hellow" + i + ".txt", "a Simple file " + i);
// }

// file list crud

// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname, "crud");
// const filepath = `${dirpath}/apple.txt`;

// Create
// fs.writeFileSync(filepath, "This is a simple text file");

// Read
// fs.readFile(filepath, "utf-8", (err, item) => {
//   console.log(item);
// });

// Update
// fs.appendFile(filepath, "and file name is apple.txt", (err) => {
//   if (!err) console.log("File is updated successifully");
// });

// fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
//   if (!err) console.log("File name is updated");
// });

// Delete
// fs.unlinkSync(`${dirpath}/fruit.txt`);
// console.log("Deleted successfully");

let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
