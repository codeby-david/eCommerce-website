import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
    await mongoose.connect('mongodb+srv://davidmacharia:08220201002@cluster0.seunwbt.mongodb.net/food-delivery').then(()=>{
        console.log("connected to db");
    }catch(err){
        res.status(500).json({message.err.message});
    });
}
