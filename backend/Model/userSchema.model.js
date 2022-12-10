const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    emailAddress:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        min:8,
        max:16
    }

},{
    timestamps:true
});



const user=mongoose.model('User',userSchema);

module.exports={
    user
}