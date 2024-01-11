const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();




app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use(express.json({ type: '*/*' }))
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', require('./routes/auth'))



app.get('/',(req, res) =>{
    res.send('running')
})
app.listen(port, ()=>{
    console.log(port)
})