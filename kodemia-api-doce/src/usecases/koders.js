const Koder = require('../models/koders')

function getAll() {
    return Koder.find()
}

function createKoder(newKoder){
    return Koder.Create(newKoder)
}


module.exports = {
    getAll: getAll,
    createrKoder: createKoder
}