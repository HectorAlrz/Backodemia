const mongoose = require('mongoose')

// .: Models-> 
const koderSchema = new mongoose.Schema({
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
    required: true,
    trim: true
    },
age: {
    type: Number,
    min: 0,
    max: 90,
    required: true,
    trim: true
    },
gender: {
    type: String,
    enum: ['m', 'f'],
    required: true
    },
generation: {
    type: Number,
    min: 1,
    required: true,
    trim: true
    }
})

const model = mongoose.model('koders', koderSchema)
// Exportamos 
module.exports = model