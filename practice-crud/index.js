const express = require("express");
require("./connection");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();

  console.log(result);
  res.send(result);

  // console.log(req.body);
  // res.send("zakky yo done")
});

app.get("/list", async(req, res)=>{
    let data = await Product.find()
    res.send(data)

})

app.delete("/delete/:_id", async(req, res) =>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params)
    res.send(data)
})

app.post("/update/:_id", async(req, res) =>{
    console.log(req.params)

    let data = await Product.updateOne(req.params,{$set: req.body})
    res.send(data)

})


app.listen(8000, () => console.log("server started"));
