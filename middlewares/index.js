const expess = requiere('express')
const server = express()
const koderRouter = require('./routerKoders')

server.use(express.json())
server.use('/koders', koderRouter)


function middleware(request, response, next) {
    console.log('Middleware externo')
    next()
}

// Middleware of the app
server.use((request, response, next)=>{
    console.log("Middleware de la APP");
    next();
}), (request, response, next) => {
    console.log("APP Middleware");
    next();
}

server.get('/', (request, response)=> {
    response.json({
        message: 'hola koders'
    })
});

server.listen(3001, ()=> {
    console.log('Server running on port 3001')
});