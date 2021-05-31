const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const fs = require('fs')
const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'pong.txt')

let pongCount = 0
console.log(`port: ${PORT}`)

app.listen(PORT)

const savePong = () => {
    const pongString = `Ping / Pongs: ${pongCount}`
    console.log(pongString)
    try {
        fs.writeFileSync(filePath, pongString)

    } catch (err) {
        console.error(`error in writing hash: ${err}`);
    }
    pongCount++
}

// savePong()

/*app.get('/pingpong', (req, res) => {
    res.send(`pong ${pongCount}`)
    savePong()
    pongCount++
})*/

app.get('/', (req, res) => {
    pongCount++
    res.send(`${pongCount}`)
})

