import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig';
import shortUrl from "./routes/shortUrl"
dotenv.config();
connectDB()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin : "http://localhost:3001",
    credentials:true,
}))

app.use("/api/",shortUrl)

const port = process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.json('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});