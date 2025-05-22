import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import short_url from './src/routes/short_url.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import {errorHandler }from './src/utils/error_handler.js';


dotenv.config('./.env');
const app = express();
// This both lines are used to parce the body of the request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    connectDB();
    console.log('Server is running http://localhost:3000/');
})

app.use('/api/create',short_url);

app.get('/:id', redirectFromShortUrl);


app.use(errorHandler);
//GET - Redirection
//POST - Create Short URL

