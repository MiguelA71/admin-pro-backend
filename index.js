//Traemos las variables de entrno
require('dotenv').config();

//Con require se hacen los import en node
const express = require('express');

//Importamos CORS
const cors = require('cors');

//Importamos la función dbConnection del config.js
const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

dbConnection();

//mean_user
//TZ9MSYrnwCCChMEW



//Rutas
//req = request - lo que se solicita
//resp = response - lo que se responde
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });

    /*
     res.status(400).json({
         ok: true,
         msg: 'Hola mundo'
     });
     */
});





app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})