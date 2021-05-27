const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, "hashFile.txt")

const port = process.env.PORT || 3000;

const readFile = async () =>
    fs.readFileSync(filePath, "utf-8")


console.log(    fs.readFileSync(filePath))

app.get('/', async (req, res) => {
    const hash = await readFile()
    res.send(hash)
})

app.listen(port)









