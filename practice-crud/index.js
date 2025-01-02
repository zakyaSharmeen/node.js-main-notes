// const mongoose = require("mongoose")
// const ProductSchema = new mongoose.Schema({ name: String, price: Number });
// const ProductsModel = mongoose.model('products', ProductSchema);

// const saveInDb = async()=>{
//     // connection
//     await mongoose.connect("mongodb://localhost:27017/e-com")
//     // define schema


// // define model

// // normal data
// let data = new ProductsModel({name: "mb"})
// // saved in compass
// let result = await data.save()
// console.log(result);


// }
 

// const updateInDb = async ()=>{

//     const Product = mongoose.model('products', ProductSchema)
//     let data = await Product.updateOne({name: "mb"},{$set:{price:700}})
//     console.log(data)
// }


// updateInDb()


const mongoose = require("mongoose");

// Definimj the schema and model outside of the functions to ensure they are accessible globally
const MongooseConnection = mongoose.connect("mongodb://localhost:27017/e-com")
const ProductSchema = new mongoose.Schema({ name: String, price: Number });
const ProductsModel = mongoose.model('products', ProductSchema);

const saveInDb = async () => {
    // Connect to the database
    await MongooseConnection;

    // Create a document and save it
    let data = new ProductsModel({ name: "mb" });
    let result = await data.save();
    console.log(result);

    
};

const updateInDb = async () => {
    // Connect to the database
    await MongooseConnection;

    // Update a document
    let data = await ProductsModel.updateOne({ name: "mb" }, { $set: { price: 900 } });
    console.log(data);

};

const deleteInDb = async ()=>{
    await MongooseConnection; 
    let data = await ProductsModel.deleteOne({name: "mb"})
    console.log(data);
    
}



// updateInDb();
// deleteInDb()

const findInDb = async ()=>{
    const product = ProductsModel
    let data = await product.find()
    console.log(data);
    
}
findInDb()
