import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import short_url from './src/routes/short_url.route.js';



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

// app.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const url = await urlSchema.findOne({ short_url: id});
//     if(url){
//         res.redirect(url.full_url);
//     }
//     else{
//         res.status(404).send('URL not found');
//     }
// });

// app.get('/api' ,(req ,res) =>{
//     res.send(nanoid(10));
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

//GET - Redirection
//POST - Create Short URL

