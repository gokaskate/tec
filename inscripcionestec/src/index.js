const express = require('express');
const path = require('path');

const pool = require('./database');

//Iniciar
const app = express();

//Ajustes De Servidor
app.set('port', process.env.port || 4000);

//Middelewaress
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

//Variables Globales
app.use((req, res, next) => {
    next();
})

//Rutas
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.post('/pet', async(req, res) => {
    console.log(req.body)
    try {
        const result = await pool.query('INSERT INTO inscrip set ?', [req.body])
        res.sendFile(path.join(__dirname + '/public/mensajegud.html'));
    } catch (error) {
        res.sendFile(path.join(__dirname + '/public/mensajebad.html'));
    }

})



//Start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});