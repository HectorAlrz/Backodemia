const express = require('express');
const mongoose = require('mongoose'),
const Koder = require('./koderModel');

const server = express();

const DB_USER = 'hector';
const DB_PASS = 'tas123123';
const DB_HOST = 'kodemia-12va.r08xr.mongodb.net';
const DB_NAME = 'kodemia';

const URL =  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

server.get('/', (request, response)=>{
    response.json({
        message: 'API with mongoose'
    })
})


server.get('/koders', async (request, response)=>{
    // buscamos el objeto
    const koders = await Koder.find()

    response.json({
        succes: true,
        message: 'API with mongoose',
        data: {
            koders
        }
    })
})


//
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(async (connection)=> {
    // DB conectada
    console.log('DB Connected: ', connection);
    
    // Server listening
    server.listen(3001, ()=> {
    console.log('Server running in port 3001')
    })
})
.catch((err)=>{
    console.error('Oh no!! ERROR:', err)
})

// GET /koders?gender=m&age=23
