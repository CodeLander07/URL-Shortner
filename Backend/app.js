import express from 'express';
import {nanoid} from 'nanoid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log('Server is running http://localhost:3000/');
})

app.get('/api/create',(req,res)=>{
    // res.send("create short URL");
    const {url} = req.body;
    console.log(url);
    res.send(nanoid(10));
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET - Redirection
//POST - Create Short URL

