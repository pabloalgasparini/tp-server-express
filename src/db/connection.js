const mongoose = require ('mongoose');

const dbConnect = ()=>{
    try{
        mongoose.connect('mongodb+srv://pablo:1234@cluster0.udcbn57.mongodb.net/?retryWrites=true&w=majority');

        console.log('Conectado a la Base de Datos');
    }catch (error){
        console.log('Error al conectar a la base de datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;