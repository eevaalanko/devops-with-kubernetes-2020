const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, "hashFile.txt")
const pongPath = path.join(directory, 'pong.txt')

const port = process.env.PORT || 3000;

const readHash = async () => fs.readFileSync(filePath, "utf-8")

// const readPong = async () => fs.readFileSync(pongPath, "utf-8")

const getPongs = async () => {
    const response = await axios.get('http://pingpong-app-svc')
    return response.data
}


console.log(fs.readFileSync(filePath))
console.log(fs.readFileSync(pongPath))

app.get('/', async (req, res) => {
    const hash = await readHash()
    const pongs = await getPongs()
   // const pong = await readPong()
   // console.log(`pong: ${pong}`)
    console.log(`hash: ${hash}`)
  //  res.send(`${hash}<br>${pong}`)
    console.log(`pongs: ${pongs}`)
    res.send(`<p>${hash}</p><p>Ping / pongs: ${pongs}</p>`)
})

app.listen(port)









