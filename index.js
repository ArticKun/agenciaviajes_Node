

//⚡ Importacion express Forma 1 Common Js antes de modulos en Js
//const express = require('express');

// ⚡ Importacion express Forma 2 con Modulos en Js Moderna
import express from 'express';          // Importamos express
import router from './routes/index.js'; // Importamos el router
import db from './config/db.js';        // Importamos la base de datos

//Instanciamos express
const app = express();


//Conectar Base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) );


//Definimos el puerto del servidor
const port = process.env.PORT || 3000; 


//Habilitar PUG
app.set('view engine','pug');


//Creamos middleware(Variable ) para obtener año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.year = year.getFullYear();      // variable año
    res.locals.siteName = 'Agencia de viajes'; // variable nombre sitio
    next();
});

/*
- req = lo que enviamos al servidor
- res = lo que recibimos del servidor
- Middleware es una linea de codigo que se ejecuta en el servidor
- "next" es una funcion que nos permite pasar a la proxima linea
o middleware
- locals = variables locales o internas de express
*/

// Agregar body parser para leer los datos del formulario
app.use( express.urlencoded({extended: true}) );


//Definir el directorio publico( Css Imgs )
app.use( express.static('public') );


// Agregamos router al servidor(app)
app.use( '/', router );

/*
- "use" soporta todos los diferentes verbos que hay en peticiones
get,path,post,put,delete, lo que hacemos es: desde la pagina
principal ('/') agrega el router (/routes/index.js)
*/


// Ejecutamos el servidor
app.listen( port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


