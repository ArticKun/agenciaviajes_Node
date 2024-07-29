
// Importamos el Model Testimonios
import { Testimonios } from "../models/testimonios.js";

const guardarTestimonio = async (req, res) => {

    // Destructuramos los datos
    const { nombre, email, mensaje } = req.body;

    //Validar formulario
    const errores = [];

    if( !nombre || nombre.trim() === '' ){
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if( !email ||email.trim() === '' ){
        errores.push({mensaje: 'El email esta vacio'});
    }
    if( !mensaje || mensaje.trim() === '' ){
        errores.push({mensaje:'El mensaje esta vacio'});
    }
    if( errores.length > 0 ){
        // Consultar modelos testimonios en DB
        const testimonios = await Testimonios.findAll();
        //Mostrar errores en la vista:
        res.render('testimonios', {
            pagina:'Testimonios',
            errores,
        //Agregamos los datos que el usuario llene en el formulario
            nombre,
            email,
            mensaje,
            testimonios
        })
    }else {
        // Almacenar en la DB( enviar formulario )
        try {
            await Testimonios.create({
                nombre,
                email,
                mensaje
            })
            // Redireccionar a la vista
            res.redirect('/testimonios');

        } catch (error) {
            // En caso de error 
            console.log(error);
        }
    } 
};


export {
    guardarTestimonio
};


/*
- req.body = seran los datos del formulario, lo que llene el usuario
- trim()   = elimina los espacios
*/