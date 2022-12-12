const jwt=require('jsonwebtoken');
const cookieParser= require('cookie-parser');


function tokenCreation(id){
jwt.sign({id},process.env.TOKEN_SECRET,{expiresIn:'2days'},(error,token)=>{
    res.cookie('jwt',token,{httpOnly:true});

})
}
function verifyMiddleware(req,res,next){
    const tokens=req.cookie.jwt;
    jwt.verify(tokens,TOKEN_SECRET,(error,decoded)=>{
        if(error){
            res.status(403).json({
                message:"you are unauthorized"
            })
        }else{
            next()
        }
    })

}

module.exports={
    tokenCreation,
    verifyMiddleware
}