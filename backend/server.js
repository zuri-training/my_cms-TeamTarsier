require('dotenv').config();

const express= require('express');

const cookieParser=require('cookie-parser');

const app=express();

const path=require('path');

const {dbConnection}=require(path.join(__dirname,'db.connection','db.connection'));

const {registerRoute}=require(path.join(__dirname,'Routes','register.routes'));

app.use(express.json());

app.use(cookieParser());

app.use(registerRoute);

const PORT=process.env.PORT||5000;


app.listen(PORT,()=>{
    console.log(`listening at PORT ${PORT}`);
})




