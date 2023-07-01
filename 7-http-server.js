const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write(' hi Welcome to our home page')
//     res.end()
// })
// server.listen(5000)

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('HI! Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000)