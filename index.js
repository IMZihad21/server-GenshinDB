const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res)=>{
    res.send('Here is your database')
})

app.listen(port, ()=>{
    console.log('Listening to port ',port)
})