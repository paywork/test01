const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { User } = require("./models/user")
const app = express()

const config = require('./config/key')

app.use(morgan('dev'))
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
//application/json
app.use(bodyParser.json())


//DB 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})  .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World! 반갑습니다')
})


app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 Client에서 가져오면 그것들을 데이터베이스에 넣어준다

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})



const port = 1000

app.listen(port, () => console.log(`Example app listiening on port ${port}!`))
