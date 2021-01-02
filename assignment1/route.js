const fs = require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url=='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="username"><button type="submit">Submit</submit></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url=='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url=='/message' && method=='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=> {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
                //res.writeHead(302, {});
            
        });    
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My FIrst Page</title></head>');
    res.write('<body><h1>Hello from Node JS Server</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;