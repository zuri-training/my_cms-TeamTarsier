require('dotenv').config();
const path=require('path');
const {user}=require(path.join(__dirname,'..','Model','userSchema.model'));
const bcrypt=require('bcrypt');
const {validatorResult}=require('express-validator');

// the register function allows a user register without a sign on service like google

async function register(req,res){
const {email,username,password}=req.body;
user.findOne({emailAddress:email}, async function(error,result){
    if(error){
        console.log(error)
    }else if(result){
        res.json('user exists')

      
       
        }else if(!result){
            const hashed=await bcrypt.hash(password,12);
            const newUser= await user.create({
                username,
                emailAddress:email,
                password:hashed
            })
            res.json(newUser)
        }
        })
        }
            
        



module.exports={
    register
}