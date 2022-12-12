const path=require('path');
const express=require('express');
const {body}=require('express-validator')
const {register}=require(path.join(__dirname,'..','Controller','registration.controller'));
const registerRoute=express.Router();

registerRoute.post('/register',[
body('email').isEmail(),
body('password').isLength({min:8,max:16}),
body('username').notEmpty()
],
register);


module.exports={
    registerRoute
}