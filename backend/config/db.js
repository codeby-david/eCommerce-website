import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("connected to db");
    }catch(err){
        res.status(500).json({message:err.message});
    });
}
