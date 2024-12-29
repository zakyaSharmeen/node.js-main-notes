const express = require("express")
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middleware");

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));


// routes
app.use("/api/users", userRouter);

// giving the command to run in port 8000
app.listen(PORT, () => console.log(`server started at port, ${PORT}`));
