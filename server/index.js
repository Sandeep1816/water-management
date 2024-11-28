const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const WorkerModel =require('./models/Worker')

const app = express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/worker")

app.post('/register', (req,res)=>{
    WorkerModel.create(req.body)
    .then(workers => res.json(workers))
    .catch(error=> res.json(error))
    

})

app.listen(3000, ()=>{
    console.log(`server is listening to the port `)
})

