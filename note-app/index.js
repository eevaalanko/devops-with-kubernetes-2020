const express = require('express')
const axios = require('axios')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'images')
const filePath = path.join(directory, 'dog.jpg')

const fileAlreadyExists = async () => new Promise(res => {
    fs.stat(filePath, (err, stats) => {
        if (err || !stats) return res(false)
        return res(true)
    })
})

const findAFile = async () => {
    if (await fileAlreadyExists()) return
    const response = await axios.get('https://picsum.photos/id/1062/200?grayscale', {responseType: 'stream'});
    response.data.pipe(fs.createWriteStream(filePath))
}


app.use('/note-app/images', express.static(path.join(__dirname, 'images')))
console.log(path.join(__dirname, 'images'))


app.get('/note-app', (req, res) => {
    findAFile().catch(e => {
        console.log( e.message);
    })
    res.sendFile(path.join(__dirname + '/index.html'))
})

console.log('Started')

findAFile()

app.listen(PORT)

