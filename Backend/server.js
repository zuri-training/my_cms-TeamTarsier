const { Console } = require('console');
const express= require('express');

const app=express();

const path=require('path');

const {db_connection}=require(path.join(__dirname,'db.connection','db.connection'));

const PORT=process.env.PORT||3000;


app.listen(PORT,()=>{
    Console.log(`listening at PORT ${PORT}`);
})




