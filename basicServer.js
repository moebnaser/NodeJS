const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our Home Page')
    }

    if (req.url === '/about') {
        return res.end('This is the about page')
    }

    res.end("Ooops we cant find your page")
})

server.listen(5000)
