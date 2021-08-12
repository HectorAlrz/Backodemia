// Mongoose is a "library"
const mongoose = require('mongoose')

const DB_USER = 'hector';
const DB_PASS = 'tas123123';
const DB_HOST = 'kodemia-12va.r08xr.mongodb.net';
const DB_NAME = 'kodemia';

const URL =  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

function connect(){
    return mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})

}

module.exports = connect