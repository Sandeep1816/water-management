const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const WorkerModel =require('./models/Worker')
const bcrypt = require("bcrypt")

const app = express()


app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/worker")

app.post("/login", (req,res)=>{
    const {number, password} = req.body;
    WorkerModel.findOne({number: number})
    .then(user =>{

       
        if(user){
            bcrypt.compare(password, user.password, (err, response)=>{
                if(err) {
                    return res.json("Incorrect Password")
                }
                    if(response){
                        res.json("Success")
    
                    }
    
            })
    }else{
        res.json("No record existed")
    }
    })
})

app.post('/register', (req,res)=>{
    const {name,number,password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        WorkerModel.create({name,number,password: hash})
        .then(workers => res.json(workers))
        .catch(error=> res.json(error))
        
    
    }).catch(err=> console.log(err.message))

    })



app.listen(3000, ()=>{
    console.log(`server is listening to the port `)
})

