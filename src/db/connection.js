const mongoose = require ('mongoose');

const dbConnect = ()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/pruebadb');

        console.log('Conectado a la Base de Datos');
    }catch (error){
        console.log('Error al conectar a la base de datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;