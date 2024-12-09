const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const WorkerModel =require('./models/Worker')

const app = express()


app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/worker")

app.post("/login", (req,res)=>{
    const {number, password} = req.body;
    WorkerModel.findOne({number: number})
    .then(user =>{
        if(user){
        if(user.password === password){
            res.json("Success")
        }else{
            res.json("the password is incorrect")
        }
    }else{
        res.json("No record existed")
    }
    })
})

app.post('/register', (req,res)=>{
    WorkerModel.create(req.body)
    .then(workers => res.json(workers))
    .catch(error=> res.json(error))
    

})

app.listen(3000, ()=>{
    console.log(`server is listening to the port `)
})

