const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/ad' && req.method == 'POST'){
       res.end('add new ad');
    } else {
    	res.writeHead(400, {'Content-Type': 'text/plain'});
    	res.end();
    }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});