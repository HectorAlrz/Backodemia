const express = require('express');

const router = express.Router();
const fs = require('fs');

/* ------------------------------------------------------------------------ */
// función promificada para leer un archivo
function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (err, content) => {
            if (err) {
                reject(err)
            }else {
                const json = JSON.parse(content) // de un string a un objeto
                resolve(json)
            }
        })
    })
}
/* ------------------------------------------------------------------------ */

router.get('/mentors/:id', async (requiere, response)=>{
    const id = parseInt(request.params.id)
    const content = await readFilePromise('kodemia.json')

    const mentorFound = content.koders.find(mentor => mentor.id === id)

    response.json(
        {
        succes: true,
        message: 'Mentor found',
        data:{
            mentor: mentorFound
        }
    })    
});

router.post('/mentors', async (requiere, response)=>{

});

router.patch('/mentors', async (requiere, response)=>{

});


module.exports = router
router.listen(8080, () => {
    console.log('listening on port: 8080')
})