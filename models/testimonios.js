

//Importamos sequelize
import sequelize from "sequelize";
// Importamos archivo config DB
import db from "../config/db.js";


//Moodel( definido deacuerdo a campos de db )
//                              tabla db
export const Testimonios = db.define('testimonios', {

    nombre: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    mensaje: {
        type: sequelize.STRING
    }, 

});