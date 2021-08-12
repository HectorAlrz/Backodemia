const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response)=> {
    try{
        const allKoders = await koders.getAll()
        response.json({
            success: true,
            message: 'All Koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error){
        response.status(400);
        response.json({
            success: false,
            message: 'Error at getting all the koders',
            error: error.message
        })
    }
});

 
router.post('/', async (request, response)=> {
    console.log(request.body)
    try {
        const newKoder = request.body
        const koderCreated = await koders.createKoder(newKoder)

        response.json({
            succes: true,
            messages: "Koder Created successfuly",
            data: {
                koder: koderCreated
            }
        })
    }
    catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: "There is something wrong in the code, go back!!"
        })
    }
});


module.exports = router