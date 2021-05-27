const fs = require('fs')
const PORT = process.env.PORT || 3001
const express = require('express')
const app = express()

const path = require('path')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, "hashFile.txt")

const saveHash = () => {
    const date = new Date();
    const hash = `hash: ${Math.random().toString(36).substr(2, 6)} date: ${date.toString()}`
    console.log(hash)
    try {
        fs.writeFileSync(filePath, hash)

    } catch (err) {
        console.error(`error in writing hash: ${err}`);
    }
}

setInterval( () => {
    saveHash();
}, 5000);

console.log('Started')

app.listen(PORT)

