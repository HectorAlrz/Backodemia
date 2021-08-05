const express = require('express');
const fs = require('fs');

// tener acceso al server express
const server = express();
const PORT = 3001;
// const objectKodemia = JSON.parse(fs.readFileSync('./kodemia.json'));

// middleware
server.use(express.json());

// Vamos a obtener el kodemia.json
server.get('/koders', (request, response)=>{
    const objectKodemia = JSON.parse(fs.readFileSync('./kodemia.json'));
    
    console.log(' Welcome to kodemia, young padawan!');

    response.json(objectKodemia);
});

// Vamos a escribir en el kodemia.json
server.post('/koders',(request, response)=>{
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
        message:'A new padawan has joined'
    });
});


// Aquí escuchamos el servidor
server.listen(PORT, ()=>{
    console.log('Server is running on port 3001')
})