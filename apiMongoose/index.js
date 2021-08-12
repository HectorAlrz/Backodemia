const express = require('express');
const mongoose = require('mongoose');
const Koder = require('./koderModel');

const server = express();

const DB_USER = 'hector';
const DB_PASS = 'tas123123';
const DB_HOST = 'kodemia-12va.r08xr.mongodb.net';
const DB_NAME = 'kodemia';

const URL =  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// middlewere
server.use(express.json())

server.get('/', (request, response)=>{
    response.json({
        message: 'API with mongoose'
    })
})


server.get('/koders', async (request, response)=>{
    // buscamos el objeto destructuring
    const {gender, age, is_min_age} = request.query
    const filters = {};
    const isMinAGe = new Boolean(is_min_age)

    let koders = null

    // creamos el filtro para buscar cada variable
    if(gender) filters.gender = gender
    if(age) {
        if(is_min_age === "true"){
            filters.age = { $gte: parseInt(age)}
        } else{
            filters.age = parseInt(age)
        }
    } 
    filters.age = age



    if(gteAge) filters.age = {$gte: gteAge}

    

    const koders = await Koder.find(filters)
    response.json({
        succes: true,
        message: 'API with mongoose',
        data: {
            koders
        }
    })
})


server.post('koders', async (request, response)=> {
    try {
        const newKoder = request.body
        const KoderCreated = await Koder.Create(newKoder)

        response.json({
            succes: true,
            messages: "Koder Created successfuly",
            data: {
                koder: koderCreated
            }
        })
    } catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: "Something went wrong >:("
        })
    }
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
