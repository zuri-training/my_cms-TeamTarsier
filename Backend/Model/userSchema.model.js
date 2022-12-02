const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstname:{
        required: true,
        type: String
    },
    lastname:{
        required:true,
        type:String
    },
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phonenumber:{
        required: true,
        type:String
    }

});



const user=mongoose.model('User',userSchema);

module.exports={
    user
}