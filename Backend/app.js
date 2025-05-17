import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';



dotenv.config('./.env');
const app = express();
// This both lines are used to parce the body of the request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    connectDB();
    console.log('Server is running http://localhost:3000/');
})

app.post('/api/create',(req,res)=>{
    // res.send("create short URL");
    const {url} = req.body;
    console.log(url);
    res.send(nanoid(10));
})

app.get('/api' ,(req ,res) =>{
    res.send("i am api ");
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET - Redirection
//POST - Create Short URL

