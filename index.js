const http = require("node:http")

const server = http.createServer((req, res) => {
    console.log("Request received!")
    res.end("Default response")
})

// server.listen(0, () => {
//     console.log(`Server listening on port: http://localhost:${server.address().port}`)
// })

const PORT = process.env.PORT ?? 3000

server.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`)
})