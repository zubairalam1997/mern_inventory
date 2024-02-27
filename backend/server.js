const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require ("cors");

const app = require("express");

const PORT = process.env.PORT || 5000;

//connect to database and start sever

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})

.catch((err)=>{
    console.error(err);
    });