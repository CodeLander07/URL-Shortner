import express from 'express';

const app = express();

app.listen(3000,()=>{
    console.log('Server is running http://localhost:3000/');
})

app.get('/api/create',(req,res)=>{
    res.send("create short URL")
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//GET - Redirection
//POST - Create Short URL

