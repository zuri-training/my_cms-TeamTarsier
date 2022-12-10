const path=require('path');

require('dotenv').config(path.join(__dirname,'..','.env'));

const mongoose=require('mongoose');
 

const dbConnection=mongoose.connect(`mongodb+srv://JUSTINA:${process.env.PASSWORD}@project.de4thmz.mongodb.net/MAISOUT?retryWrites=true&w=majority`);
    

    module.exports={
        dbConnection
    }




