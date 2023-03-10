const Brand=require('../models/brandModel');
const asyncHandler=require("express-async-handler");
const validateMongoDbId=require('../untils/validateMongodbId');

const createBrand=asyncHandler(async(req,res)=>{
    try{
            const newBrand=await Brand.create(req.body);
            res.json(newBrand);
    }catch(error){
        console.log("error brand backedn");
        throw new Error(error);

    }
})

const updateBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const updateBrand=await Brand.findByIdAndUpdate(id,req.body,{new:true,});
            res.json(updateBrand);
    }catch(error){
        console.log('error brand backend');
        throw new Error(error);

    }
})
const deleteBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const deleteBrand=await Brand.findByIdAndDelete(id);
            res.json(deleteBrand);
    }catch(error){
        console.log("error brand backedn");
        throw new Error(error);

    }
})
const getBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const getBrand=await Brand.findById(id);
            res.json(getBrand);
    }catch(error){
        console.log("error brand backedn");

        throw new Error(error);

    }
})
const getallBrand=asyncHandler(async(req,res)=>{
    // const {id}=req.params;
    // validateMongoDbId(id);
    try{
            const getallBrand=await Brand.find();
            res.json(getallBrand);
    }catch(error){
        console.log("error brand backedn");
        throw new Error(error);

    }
})

module.exports={createBrand,updateBrand,deleteBrand,getBrand,getallBrand};
