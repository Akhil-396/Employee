const mongoose =require('mongoose')
const Schema=mongoose.Schema;

let EmpSchema = new Schema({
    id :{
        type: String,
        required:true
    },
    
    name :{
        type: String,
        required: true
    },
   designation:{
        type: String,
        required: true
    },
    doj :{
        type: Date,
        required: true
    },
    dor :{
        type: Date,
        required: true
    },
    
    
})
module.exports=mongoose.model('employer',EmpSchema)