// .: Server definition
// .: Middlewares
// .: Routers

const express = require('express')
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const server = express()

// .: Enpoints => GET /koders
// .: 1. The model must exist
// .: 2. Create the necessary  -> use case <-
// .: 3. Create the endpoint =>

// .: Middleware
server.use(express.json())

// .: Routers
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)
module.exports = server

/*
post  /koders
delete /koders/:id -> findByIdAndDelete()

 .: Practica  casí final
 Kodemia necesita poder gestionar mentores,
 crear mentores
 actualizar
 eliminar
 obtener el detalle de un mentor
 obtener todos los datos de los mentores

.: Segunda Parte-Plus
Referencias
Kodemia necesita gestionar sus celulas de mentores:
1.: Crear Mentores
2.: Actualizar
3.: Eliminar
4.: Obtener el detalle de un mentor
5.: Obtener todos los datos de los mentores

{
    name: 'Back4blood',
    lastName: 'Valve',
    module: ['maquetado', 'backend'...etc],
    gender: ['male','female']
}
*/