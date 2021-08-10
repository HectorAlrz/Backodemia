        const express = require('express');
const fs = require('fs');
const kodersRouter = require('./routers/koders')

// tener acceso al server express
const server = express();
const PORT = 3001;
// const objectKodemia = JSON.parse(fs.readFileSync('./kodemia.json'));

// middleware
server.use(express.json());

server.use('/koders', kodersRouter)
server.use('/mentors, mentorsRouter')


// Vamos a obtener el kodemia.json
server.get('/koders', (request, response) => {
    const objectKodemia = JSON.parse(fs.readFileSync('./kodemia.json'));

    console.log(' Welcome to kodemia, young padawan!');

    response.json(objectKodemia);
});

// Vamos a escribir en el kodemia.json
server.post('/koders', (request, response) => {
    let objKodemia = fs.readFileSync('./kodemia.json', 'utf-8');
    console.log(objKodemia);

    // Convierto mi json a objeto
    let modificableObjKodemia = JSON.parse(objKodemia);

    // Obtenemos el objeto de la peticion post en body
    const body = request.body;
    console.log('Body: ', body);

    // Pusheamos el objeto 
    modificableObjKodemia["koders"].push(body);

    let modificableObjKodemiaString = JSON.stringify(modificableObjKodemia);

    fs.writeFileSync('./kodemia.json', modificableObjKodemiaString);
    //console.log("objecto: ". objectKodemia);

    response.status(201).json({
        message: 'A new padawan has joined'
    });
});

// Aquí escuchamos el servidor
server.listen(PORT, () => {
    console.log('Server is running on port 3001')
})


// función promificada para leer un archivo
function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (err, content) => {
            if (err) {
                reject(err);
            } else {

                const json = JSON.parse(content);
                resolve(json);
            }
        })
    })
}

// Sintaxis Universal
// METHOD /recurso/identificador
// PATCH /koders/:id

server.patch('/koders/:id', async (request, response)=>{
    const {id} = request.params
    const {name, generation} = request.body
    const content = await readFilePromise('kodemia.json');

    content.koders.map((koder)=> {
        if (koder.id == parseInt(id)){
            koder = {...koders.koder, name, generation}
        }
        return koder
    })

    content.koders = newKoders

    fs.writeFileSync('kodemia.json', JSON.stringify(content, null, 2), 'utf-8')
    
    response.json({
        success: true,
        message: 'koder Updated'
    })
})


// Buscaremos un koder.

server.get('/koders/:id', async (request, response) => {
    // Creamos una varable que contenga el id en Number.
    const id = parseInt(request.params.id)
    // Nos traemos el .
    const content = await readFilePromise('./kodemia.json', 'utf-8');
    console.log(content)
    // Buscamos el koder mediante su ID.
    let koderHere = content.koders.find(koder => koder.id === id)

    if(!koderHere){
        response.json({
            sucess: false,
            message: 'koder not found'
        })

    } else {
        response.json({
            sucess: true,
            message: 'Koderfound',
            data: {
                koder: koderHere
            }
        })
    }
    response.json(koderHere)
});

erver.patch('/koders/:id', async (request, response) => {
    const { id } = request.params
    const {name, generation} =  request.body
    
    const content = await readFilePromise('kodemia.json')

    const newKoders = content.koders.map((koder) => {
        if (koder.id === parseInt(id)) {
            if(!name) {
                koder = {...koder, generation}
            }else if(!generation){
                koder = {...koder, name}
            }else {
                koder = {...koder, name, generation}
            }
        }
        return koder
    })
})

