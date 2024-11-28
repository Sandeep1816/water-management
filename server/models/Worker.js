const mongoose = require("mongoose")


const WorkerSchema = new mongoose.Schema({

    name:String,
    number:Number,

    password:String,

})

const WorkerModel = mongoose.model("workers", WorkerSchema)
module.exports = WorkerModel;