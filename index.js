const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//DB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.prhx4.mongodb.net/test01?retryWrites=true&w=majority', {
   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}) .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})