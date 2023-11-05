const mysql = require('mysql2');
require("dotenv").config()
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "api",
}); 

conexion.connect((error) => {
    if(error){
        console.log("Error al conectarse a la base de datos");
        process.exit(1);
    }else{
        console.log("Conexion establecida");
    }
})

module.exports = conexion;