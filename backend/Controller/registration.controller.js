require('dotenv').config();
const path=require('path');
const {user}=require(path.join(__dirname,'..','Model','userSchema.model'));
const bcrypt=require('bcrypt');
const {generateFromEmail}=require('unique-username-generator')
const  {tokenCreation}=require(path.join(__dirname,'..','Authentication','Authenticate'));
const {validationResult}=require('express-validator');

// the register function allows a user register without a sign on service like google

async function register(req,res){
const {email,username,password}=req.body;
user.findOne({emailAddress:email}, async function(error,result){
    if(error){
       res.status(500).json({
        message:'an error occurred while processing your request'
       })
    }else if(result){
       return res.status(403).json('A user with this email already exists')

      
       
        }else if(!result){
           const errors=validationResult(req);
           if(!errors.isEmpty()){
            res.status(403).json(errors.array());

           }else{
            const passwordString=password.toString();
            const hashed=await bcrypt.hash(passwordString,12);
            const userGenerated=generateFromEmail(email,5);
            const newUser= await user.create({
                username:userGenerated,
                emailAddress:email,
                password:hashed
            })
            // tokenCreation(newUser._id);
            // console.log(newUser._id);
            res.json(tokenCreation(newUser._id));
           }
        }
        })
        }
            
        



module.exports={
    register
}