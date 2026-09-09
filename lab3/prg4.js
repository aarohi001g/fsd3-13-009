import http from 'http'
const server = http.createServer((req, res) => {
    if(req.url === '/api/products'){
        res.end(JSON.stringify([
            {id: 1, name: 'mobile', price: 10000, rating: 4.5, reviews: 225},
            {id: 2, name: 'laptop', price: 50000, rating: 4.8, reviews: 150},
            {id: 3, name: 'tablet', price: 20000, rating: 4.3, reviews: 180}
        ]))
    }
})
server.listen(3000,() => console.log('prg4 is running on port 3000'))