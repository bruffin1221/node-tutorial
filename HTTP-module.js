const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Hello World')
        return
    }
    if(req.url==='/about'){
        res.end('This is your world')
        return
    }
    res.end(`
    <h1>Oops<h1>
    <a href="/">Back<a>
    `)
})

server.listen(5000)