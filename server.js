const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path:"./config/.env"});

const router = require('./route/route.js');
const morgan = require('morgan');

const dbConnect = require("./config/db.js");
dbConnect();

app.use(express.json());
app.use(morgan("dev"));

app.use('/api/users',router);

app.listen(process.env.PORT,()=>{
    console.log(`SERVER RUNNING`);
});