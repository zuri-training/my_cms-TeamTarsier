require=dotenv.config();

const mongoose =require('mongoose');

const db_connection=mongoose.connect(`mongodb+srv://${process.env.USERNAME}:<password>@project.de4thmz.mongodb.net/{${process.env.PASSWORD}?retryWrites=true&w=majority`);

module.exports={
    db_connection
}


