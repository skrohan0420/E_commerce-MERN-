const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const path = require('path');
mongoDB();



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.FRONTND_URL)
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use(express.json({ type: '*/*' }))
app.use(express.urlencoded({ extended: true }));
app.use('/images/product', express.static(path.join(__dirname, 'uploads/productImg')));
app.use('/images/user', express.static(path.join(__dirname, 'uploads/userImg')));
app.use('/api/user', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))



app.get('/', (req, res) => {
    res.send('running')
})
app.listen(port, () => {
    console.log(port)
})