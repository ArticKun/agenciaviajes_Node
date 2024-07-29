
// Importamos el Model
import {Viaje} from "../models/Viaje.js";
// Importamos el Model Testimonios
import { Testimonios } from "../models/testimonios.js";


// Pagina Inicio
const paginaInicio = async (req, res) => {

    //Consultar DB 3 viajes del model viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonios.findAll({ limit: 3 }) );

    try {
        
        // Consultar DB al mismo tiempo
        const resultado = await Promise.all( promiseDB );

        // Nombre de la vista / { info como objeto }
        res.render('inicio', { 
            pagina     :'inicio',
            clase      :'home',
            viajes     :resultado[0],
            testimonios:resultado[1],
        });
    } catch (error) {
        console.log(error);
    }
};


// Pagina Nosotros
const paginaNosotros = (req, res) => {
    // Renderiza vista nosotros
    res.render('nosotros', {
        pagina:'Nosotros',
    });
};


//Pagina Viajes / Con DB
const paginaViajes = async (req, res) => {
    
    //Consultar DB
    const viajes = await Viaje.findAll();

    //Renderizar la vista viajes / enviar viajes de DB
    res.render('viajes', {
        pagina:'Tu Próximo Viaje',
        viajes:viajes
    })
};


// Pagina detalle Viaje / Con DB / Comodin
const paginaDetalleViaje = async (req, res) => {

    // req.params es el comodin, desestructuramos
    const { slug } = req.params;
    // consultamos en la base de datos el viaje
    const resultado = await Viaje.findOne( { where: { slug } } );

    //Renderizamos en la vista viajeInfo / enviar viaje(slug)
    res.render('viajeInfo', {
        pagina:'Información Viaje',
        resultado
    })

};


//Pagina Testimonios / Consulta DB
const paginaTestimonios = async (req, res) => {

    try {
        //Consultar Modelo testimonios en DB
        const testimonios = await Testimonios.findAll();
        // Renderiza vista testimonios / enviar testimonios 
        res.render('testimonios', {
            pagina:'Testimonios',
            testimonios
        })
        
    } catch (error) {
        console.log(error);
    }
};


export { 

    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
};



/*

req = lo que enviamos
res = lo que recibimos

render() = renderiza una vista
send()   = envia un dato
json()   = envia un json

*/