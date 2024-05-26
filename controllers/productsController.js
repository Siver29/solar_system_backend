const Product = require('../model/productsModel');
const addProduct=async(req,res)=>{
    const {productName:productName,productImageUrl,productPrice,productDetails,productType,productCompanyName}=req.body;
    const newProduct= await new Product ({productName,productImageUrl,productPrice,productDetails,productType,productCompanyName});
    await newProduct.save();
    res.json("Created success")
}
const  getAll=async(req,res)=>{
    const all= await Product.find()
    res.json(all)
}
const getByCompany=async(req,res)=>{
    const productCompanyName=req.params.productCompanyName;
    const all=await Product.find({productCompanyName});
    console.log(all)
    res.json(all)

}
module.exports={getAll,addProduct,getByCompany}