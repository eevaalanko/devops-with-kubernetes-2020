const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, "hashFile.txt")
const pongPath = path.join(directory, 'pong.txt')

const port = process.env.PORT || 3000;

const readHash = async () => fs.readFileSync(filePath, "utf-8")

const readPong = async () => fs.readFileSync(pongPath, "utf-8")


console.log(fs.readFileSync(filePath))
console.log(fs.readFileSync(pongPath))

app.get('/', async (req, res) => {
    const hash = await readHash()
    const pong = await readPong()
    console.log(`pong: ${pong}`)
    console.log(`hash: ${hash}`)
    res.send(`${hash}<br>${pong}`)
})

app.listen(port)









