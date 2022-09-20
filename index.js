const path = require('path');
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')

const dbConnect = require('./src/db/connection')

dotenv.config()

// Inicializaciones
const app = express();
dbConnect();

// Configuraciones
const port = process.env.PORT || 3000;

// MIDDLEAWERES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Directorios de archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')))

// Importando rutas
app.use(require("./src/routes/user.routers"));

// Configurando puerto
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http//localhost:${port}`)
})