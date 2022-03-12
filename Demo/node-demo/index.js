const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function myServer (req, res) {
    // console.log({req});
    // console.log(req.url);
    console.log(req.url.split('q=')[1]);
    let query = req.url.split('q=')[1];
    let ans = Number(query)*Number(query);
    
    console.log(ans);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(String(ans));
}

const server = http.createServer(myServer);

function callBack() {
    console.log(`Server running at http://${hostname}:${port}/`);;
}

server.listen(port, hostname, callBack);
