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

const fs = require("fs");

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}

fs.writeFileSync(input[2], input[3]);
