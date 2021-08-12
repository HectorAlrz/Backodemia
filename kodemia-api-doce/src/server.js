// .: Server definition
// .: Middlewares
// .: Routers

const express = require('express')
const kodersRouter = require('./routers/koders')
const server = express()

// .: Enpoints => GET /koders
// .: 1. The model must exist
// .: 2. Create the necessaru use case
// .: 3. Create the endpoint =>

server.use('/koders', kodersRouter)
module.exports = server

// post  /koders
// delete /koders/:id -> findByIdAndDelete()