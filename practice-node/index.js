// const app = require("./app")

// console.log(app.y);

// const arr = [2,3,45, 5,78, 9,10]
// let result = arr.filter((num)=>{
//     return num>=4

// })
// console.log(result);

// const http = require("http")

// http.createServer((req, res) =>{
//     res.write("hii this is zakya")
//     res.end()

// }).listen(4500)

// this in in data.js file
// const data = [
//     {name: "sam", class: "11", rollno: "20"},
//     {name: "ram", class: "12", rollno: "23"},
//     {name: "kim", class: "10", rollno: "29"},

// ]
// module.exports =data

// const http = require('http')
// const data = require("./data")
// http.createServer((req, res)=>{
//     res.writeHead(200,{"content-type":"application\json"})
//     res.write(JSON.stringify(data))
//     res.end()

// }).listen(8000)
// console.log("server started")

// const fs = require("fs");

// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input");
// }

// fs.writeFileSync(input[2], input[3]);

// displaying file list from the oflder

// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname,"files")

// fs.readdir(dirPath,(err,files)=>{
//   if (err) {
//     console.log("Error reading directory:", err);
//     return;
//   }
//   files.forEach((item)=>{
//     console.log("files name is ", item);

//   })

// })

// ------------------------------------------------------------

// crud operation using filesystem

// const fs = require("fs");
// // Import the 'fs' module to handle file operations (read, write, append, etc.).
// const path = require("path");
// // Import the 'path' module to work with file and directory paths in a platform-independent way.
// const dirPath = path.join(__dirname, "crud");
// // Join the current directory path (__dirname) with "crud" to get the full path of the "crud" directory.
// const filepath = `${dirPath}/apple.txt`;
// // Define the full path for the file "apple.txt" inside the "crud" directory.
// fs.writeFileSync(filepath, "this is a simple text file");
// // Create or overwrite "apple.txt" with the content "this is a simple text file".
// fs.readFile(filepath, "utf-8", (err, item) => {
//   // Read the content of "apple.txt" in UTF-8 encoding and handle it in a callback function.
//   console.log(item);
//   // Log the content of the file to the console.
// });
// fs.appendFile(filepath, "and the file name is apple.tst,made by zak", (err) => {
//   // Append additional text to "apple.txt", then handle any error in a callback function.
//   if (!err) console.log("file is updated");
//   // If no error occurs, log "file is updated" to the console.
// });
// fs.rename(filepath, `${dirPath}/fruit.txt`, (err) => {
//   // Rename "apple.txt" to "fruit.txt" in the same "crud" directory.
//   if (!err) console.log("file is renamed");
//   // If no error occurs, log "file is renamed" to the console.
// });
// fs.unlinkSync(`${dirPath}/fruit.txt`);
// // Synchronously delete the file "fruit.txt" from the "crud" directory.


// const express = require("express")
// const app = express()


// app.get("/user", (req, res)=>{
//     console.log("data sent by the browser =>>> ", req.query.name);
//     res.send("wemcome,"+ req.query.name)

// })
// app.listen(5000,()=>{
//     console.log("server started");
    
// })


const express = require("express")

const app= express()


const reqFilter= (req, res, next)=>{
    if(!req.query.age){res.send("please provide ur age")}
    else if(req.query.age <18){res.send("you cant login")}
    else{next()}
} 
app.use(reqFilter)
app.get("/",(req, res)=>{
    res.send("welcome to the home page")
})
app.get("/users",(req, res)=>{
    res.send("welcome to the user page")
})


app.listen(8000, ()=> console.log("server started")
)


