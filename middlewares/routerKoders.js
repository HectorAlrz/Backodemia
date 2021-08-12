const express = require('express')
const router = express.Router()

router.use((request, response, next)=>{
    console.log('Middleware en el router de koders')
    next()
})

router.get('/', (request, response)=> {
    response.json({
        message: 'GET all koders'
    });
});

router.post('/', (request, response)=> {
    response.json({
        message: 'Create koder'
    });
});

module.exports = routerccc