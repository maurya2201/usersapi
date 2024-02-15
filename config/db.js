const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"./config/.env"});

const dbConnect=async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db connected`);
}
module.exports = dbConnect;