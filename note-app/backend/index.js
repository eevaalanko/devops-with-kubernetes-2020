const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 3001

app.use(cors());

let todos = [
    {
        text: 'TODO1', done: false
    },
    {
        text: 'TODO2', done: false
    },
]

app.get('/todos', async (req, res) => {
    console.log('aarghhh, get todos....')
    res.json(todos);
})

app.post('/todos', (req, res) => {

    const body = req.body;
    console.log('body: ', body);

    const todo = {
        text: body.text,
        done: false
    }
    try {
        todos = todos.concat(todo);
    } catch (e) {
        console.log(e)
    }
})

app.get('/', async (req, res) => {
    console.log('wheeeeee... port is: ' + PORT)
  //  res.send('server is running');
})


console.log('backend started')


app.listen(PORT)

