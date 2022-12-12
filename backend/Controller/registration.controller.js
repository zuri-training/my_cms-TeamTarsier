require('dotenv').config();
const path=require('path');
const {user}=require(path.join(__dirname,'..','Model','userSchema.model'));
const bcrypt=require('bcrypt');
const {generateFromEmail}=require('unique-username-generator')
const  {tokenCreation}=require(path.join(__dirname,'..','Authentication','Authenticate'));
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
           const errors=validatorResult(req);
           if(!errors.isEmpty()){
            res.status(403).json(errors.array());

           }else{
            const hashed=await bcrypt.hash(password,12);
            const user=generateFromEmail(username,5);
            const newUser= await user.Create({
                username:user,
                emailAddress:email,
                password:hashed
            })
            // tokenCreation(newUser._id);
            res.json('hello')
            console.log(tokenCreation(newUser._id));
           }
        }
        })
        }
            
        



module.exports={
    register
}