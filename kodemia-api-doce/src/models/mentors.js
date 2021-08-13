const mongoose = require('mongoose')

// .: Mentors Kodemia Models

const mentorSchema = new mongoose.Schema({
    name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
    trim: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
    },
    module:[{
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
    enum: ['React', 'Backend', 'Maquetado', 'Frontend'],
    trim: true
    }],
    gender: {
        type: String,
        enum: ['m', 'f'],
        required: true
        }
})

const mentorModel = mongoose.model('mentors', mentorSchema)
module.exports = mentorModel