const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let pongCount = 0

app.get('/pingpong', (req, res) => {
    res.send(`pong ${pongCount}`)
    pongCount++
})

console.log(`port: ${PORT}`)

app.listen(PORT)