const path=require('path');
const {verifyMiddleware}=require(path.join(__dirname,'..','Authentication','Authenticate'));
const {login}=require(path.join(__dirname,'..','Controller','login.controller'));
const express=require('express');
const loginRoute=express.Router();

loginRoute.post('/login',verifyMiddleware,login);

module.exports={
    loginRoute
}

