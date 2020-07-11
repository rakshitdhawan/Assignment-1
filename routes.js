const http=require('http')

const requestHandler = (req,res) => {
    const url= req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>HomePage</title></head>');
        res.write('<body><form method="POST" action="/create-user"><input type = "text" name="username"> <br><button type="submit">Send</button> </form></body> ')
        res.write('</html>');
        res.end();
    }
    if(url==='/create-user' && method === 'POST'){
        const username = [];
        req.on('data',(chunk)=>{
            username.push(chunk)
        });

     return req.on('end',()=> {
            const parsedUsername =Buffer.concat(username).toString();
            console.log(parsedUsername);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })
    }
    if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User-1<li>User-2<li>User-3</ul></body>');
        res.write('</html>');
        res.end();
    }
}

module.exports = requestHandler;