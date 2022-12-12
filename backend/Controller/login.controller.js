const path=require('path');
const {user}=require(path.join(__dirname,'..','Model','userSchema.model'));
const bcrypt=require('bcrypt');


function login(req,res){
const{password,username}=req.body;
user.findOne({username:username},function(error,foundUser){
    if(error){
        res.status(500).json({
            message:"an issue occurred while processing your data"
        })
    }else{
        bcrypt.compare(password,foundUser.password,function(err,matched){
            if(err){
                res.status(400).json({
                    message:"invalid user details"
                })
            }else if(matched){
                res.status(200).json({
                    message:"you have been logged In successfully"
                })
            }
        })

    }
})
}