const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

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
        const koderCreated = koders.createKoder(newKoder)

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

router.patch('/:id', (request, response)=> {
    try{
        const { id } = request.params
        const {body: koderData} = request
        const koderUpdated = koders.updateById(id, koderData);

        response.json({
            success: true,
            message: 'Koder updated',
            data: {
                koderUpdated
            }
        })
    } catch (error){
        response.status(400);
        response.json({
            success: false,
            message: 'Error at updating the koder',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response)=> {
    try {
        const {id} = request.params;
        const koderDeleted = await koders.deleteById(id);
        response.json({
            success: true,
            message: "Koder M.I.A.",
            data: {
                koder: koderDeleted
            }
        })
    }
    catch(error){
        response.status(400);
        response.json({
            success: false,
            message: 'Error at deleting the koders',
            error: error.message
        })
    }
});

module.exports = router