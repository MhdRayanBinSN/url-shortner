
import mongoose from "mongoose";

const connectDB = async ()=>{
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    try{
        console.log(
            "Database Connectd : ",
            connect.connection.host,
            connect.connection.name

        );
        
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}
export default connectDB;