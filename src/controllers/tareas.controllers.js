const { findByIdAndUpdate } = require("../models/tareas");
const tareaModel = require("../models/tareas");

const ctrltareas = {};

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrltareas.gettareas = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tareas = await tareaModel.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tareas)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrltareas.posttareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { id, title, descripcion, estados } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newtareas = new tareaModel({
        id,
        title,
        descripcion,
        estados
    });

    // Se almacena en la base de datos con método asícrono .save()
     await newtareas.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Tarea creada correctamente',
        newtareas
    });
};

// Controlador para actualizar una tarea
ctrltareas.puttareas = async (req, res) => {
    const id = req.params.id_tareas
    const {title, descripcion}= req.body;
    try {
        await tareaModel.findOneAndUpdate({id},{title,descripcion},(err,doc)=>{
            if (err){
                console.log(err)
            }else{
                console.log("Update Task: ",doc)
            }
        })
        // const tareasUpdate = await tareaModel.findByIdAndUpdate(id,)
        return res.json({
            msg: 'Actualizado correctamente'
        })
    } catch (error) {
        return res.json({message: error.message})
    }
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrltareas.deletetareas = async (req, res) => {const id = req.params.id_tareas
    const {title, descripcion}= req.body;
    try {
        await tareaModel.findOneAndDelete({id},{title,descripcion},(err,doc)=>{
            if (err){
                console.log(err)
            }else{
                console.log("Update Task: ",doc)
            }
        })
        // const tareasUpdate = await tareaModel.findByIdAndUpdate(id,)
        return res.json({
            msg: 'Borrado correctamente'
        })
    } catch (error) {
        return res.json({message: error.message})
    }
};

module.exports = ctrltareas;