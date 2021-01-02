const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next)=> {
    
    res.send('<h1>Hello from the Users</h1>');
});

app.use('/', (req, res, next)=> {
    console.log('In the other Middle ware');
    res.send('<h1>Hello from Express</h1>');
});

const server = http.createServer(app);

server.listen(3000);