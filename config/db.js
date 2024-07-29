

import sequelize from "sequelize"; // Importamos sequelize
import dotenv from "dotenv";       // Importamos variables de entorno
//Usamos variables de entorno
dotenv.config();

/*   

Los argumentos que recibira sequelize son:
nombre db     
usuario  
password
{} = configuraciones

*/
const db = new sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS,{

    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});


export default db;