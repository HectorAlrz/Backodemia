const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()

// .: GET all Mentors
router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getMentors();

        response.json({
            success: true,
            message: 'All Mentors',
            data: {
                mentors: allMentors
            }
        })
        } catch (error) {
        response.status(400);
        response.json({
            message: 'Error at getting all the mentors',
            success: false,
            error: error.message
        })
    }
})


router.post('/', async (request, response)=> {
  try {
    const newMentor = request.body
    const mentorCreated = await mentors.createMentors(newMentor)

    response.json({
        succes: true,
        messages: "A new Mentor has spawn",
        data: {
            mentor: mentorCreated
        }
    })
    } catch (error){
        response.json({
            success: false,
            message: "There is something wrong in the code, go back!!",
            error: error.message
        })
    }
})

router.findByIdAndDelete('/',async (request, response)=> {
    try{
        let mentorId = request.param
        let mentorDeleted = await mentors.deleteMentor(mentorId)
        
        response.json({
            succes: true,
            messages: "Mentor dismissed",
            data: {
                mentor: mentorDeleted
            }
        }) 
    } catch(error){
        response.json({
            success: false,
            message: "There is something wrong in the code, go back!!",
            error: error.message
        })
    }
})
module.exports = router