// const http = require("http")

// const myServer = http.createServer((req, res) =>{

    
//     console.log("New Req Rec");
//     console.log(req.headers);
    
//     res.end("Hello from server")
    

// });

// myServer.listen(8000, () => console.log("Server started")
// )


// ----------------------------
// const http = require("http")
// const fs = require("fs")

// const myServer = http.createServer((req, res) =>{

//     const log = `${Date.now()}: ${req.url} New Request\n`

//     fs.appendFile("log.txt", log,(err, data) =>{
//         res.end("Hello from server")

//     })


    
  
    

// });

// myServer.listen(8000, () => console.log("Server started")
// )



// ------------------------------
// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// const myServer = http.createServer((req, res) =>{
//     //to stop the faavicon 
//     if(req.url === "/favicon.ico") return res.end 

//     const log = `${Date.now()}: ${req.url} New Request\n`
//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl);
    

//     fs.appendFile("log.txt", log,(err, data) =>{
//         // res.end("Hello from server")
//         switch(myUrl.pathname){
//             case "/" : res.end("HomePage")
//             break
//             case "/about": 
//             const usename = myUrl.query.myname
//             res.end(`hiimyname ${usename}`)
//             break

//             case "/search": res.end("I am zakya about")
//             break

//             default:
//                 res.end("404 error")
//         }
//     })


    
  
    

// });

// myServer.listen(8000, () => console.log("Server started")
// )


// const os = require("os")
// console.log(os.cpus().length);




// writing node.js using freamework-express.js


// const express = require("express")
// const app = express()

// app.get("/", (req, res) =>{
//     return res.send("Hello i m in home page")
// })


// app.get("/about", (req, res) =>{
//     return res.send(`hello i m from about ${req.query.name}`)
// })

// app.listen(8000, () => console.log("server started"))

