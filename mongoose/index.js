const mongoose = require('mongoose');

const DB_USER = 'hector';
const DB_PASS = 'tas123123';
const DB_HOST = 'kodemia-12va.r08xr.mongodb.net';
const DB_NAME = 'kodemia';

const URL =  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// .: schema -> definición de cada uno de los campos.
const koderSchema = new mongoose.Schema({
    name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    require: true
    },
lastName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    require: true,
    trim: true
    },
age: {
    type: Number,
    min: 0,
    max: 90,
    require: true,
    trim: true
    },
gender: {
    type: String,
    enum: ['m', 'f'],
    require: true
    }
})


// .: model -> es la plantilla de mi colección.

// se puede comunicar con mi base de datos.
const Koder = mongoose.model('koders', koderSchema)



// regresa una promesa y por eso se usa then y catch
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
// hacemos async para esperar la conexión del servidor,
// y asi poder obtener el objeto en esta
.then(async (connection)=> {
    console.log('DB Connected: ', connection);

    // llamamos a todos los koders
    //const koders = await Koder.find({})
    //console.log(koders)
    
    // Creamos un nuevo koder
    const koderCreated = await Koder.create({name: 'Alfred', lastName: 'Pizaña', gender: 'm', age: 27})
    console.log(koderCreated);
})
.catch((err)=>{
    console.error('Oh no!! ERROR:', err)
})
