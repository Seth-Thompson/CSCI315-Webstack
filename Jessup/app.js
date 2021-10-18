const http = require('http');
const fs = require('fs');

server.listen(6789);
console.log("listening on port 6789");

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile('./index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/jessup") {
        fs.readFile('./jessup.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/william') {
        fs.readFile('./william.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});
