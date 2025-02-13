import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();


const port = process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.json('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});