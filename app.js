const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server start');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/views/404.html');
});