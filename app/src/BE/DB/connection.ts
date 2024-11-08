import mongoose  from "mongoose"

export const mongoDBConnect=async()=>{
    if(mongoose.connections.length < 2){
    const uri = process.env.mongourl!
    await mongoose.connect(uri)
    }
}