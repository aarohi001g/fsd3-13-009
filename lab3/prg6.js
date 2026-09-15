import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("Get request is successful");
    } else if (req.url === '/' && req.method === 'POST') {
        res.statusCode = 200;
        res.end("Post request is successful");
    } else if (req.url === '/' && req.method === 'PUT') {
        res.statusCode = 200;
        res.end("PUT request is successful");
    } else if (req.url === '/' && req.method === 'DELETE') {
        res.statusCode = 200;
        res.end("Delete request is successful");
    }

    else {
        res.statusCode = 404;
        res.end("Page not found");
    }

})

server.listen(3000, () => console.log("prg6 is running on port 3000..."))


