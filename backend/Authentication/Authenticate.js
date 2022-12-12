const jwt=require('jsonwebtoken');


function tokenCreation(id){
jwt.sign({id},process.env.SECRET,{expiresIn:'2days'},(error,token)=>{
    console.log(token);

})
}

module.exports={
    tokenCreation
}