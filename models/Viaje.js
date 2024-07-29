
//Importamos sequelize
import sequelize from "sequelize";
// Importamos archivo config DB
import db from "../config/db.js";


//Moodel( definido deacuerdo a campos de db )
//                              tabla db
export const Viaje = db.define('viajes', {

    titulo: {
        type: sequelize.STRING
    },
    precio: {
        type: sequelize.STRING
    },
    fecha_ida: {
        type: sequelize.DATE
    },
    fecha_vuelta: {
        type: sequelize.DATE
    },
    imagen: {
        type: sequelize.STRING
    },
    descripcion: {
        type: sequelize.STRING
    },
    disponibles: {
        type: sequelize.STRING
    },
    slug: {
        type: sequelize.STRING
    }
    
});