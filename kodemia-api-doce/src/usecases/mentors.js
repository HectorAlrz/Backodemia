const Mentor = require('../models/mentors')

function getMentors(){
    return Mentor.find()
}

function createMentors(newMentor){
    return Mentor.create(newMentor)
}

function deleteMentor(mentorId){
    return Mentor.findByIdAndDelete(mentorId)
}

module.exports = {
    getMentors: getMentors,
    createMentors: createMentors,
    deleteMentor: deleteMentor
}