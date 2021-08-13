const Koder = require('../models/koders')

function getAll() {
    return Koder.find();
}

function createKoder(koder){
    return Koder.create(koder);;
}


function deleteById(id){
    return Koder.findByIdAndDelete(id);
}

function updateById(id, newData){
    return Koder.findByIdAndUpdated(id, newData, {update: true})
}

module.exports = {
    getAll: getAll,
    createKoder: createKoder,
    deleteById: deleteById
}