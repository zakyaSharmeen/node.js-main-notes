const { log } = require("console")
const fs = require("fs")





// to make a file
// sync-- systematic
// fs.writeFileSync("./text.txt","hii zakya u did it")

// async
// fs.writeFile("./text.txt","hello world",(err) =>{})


// ----------------------
// reading a file

// sync---can be store in variable
// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result);

// async
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log(err, "error oops!");
        
//     }
//     else{
//         console.log(result);
        
//     }
// })


// -----------------------
// to get the dta in stacks
// fs.appendFileSync("./text.txt", "hey i m her")

// ----------------
// to copy
// fs.cpSync("./text.txt", "./copy.txt")

// ---------------
// to delete
// fs.unlinkSync("./copy.txt")

// to make foliders and file
// fs.mkdirSync("docs/a/b", {recursive: true})




// sync-BLOCKING-works in systematically line after line
// ex

// console.log("1");
// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result);
// console.log("2");
// console.log("3");
// console.log("4");


// async-NON-BLOCKING-works in systematically line after line
// ex

console.log("1");
const result = fs.readFile("./contact.txt", "utf-8",(err, result) =>{
console.log(result);

})
console.log("2");
console.log("3");
console.log("4");



