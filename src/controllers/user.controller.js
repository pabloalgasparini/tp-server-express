const User =require("../models/user");

const ctrlUser = {};

// Controlador para obtener todos los usuarios de la base de datos con método. save()
ctrlUser.getUser=async(req,res)=>{
    // Se consultan todos los documenttos de la base de datos
    const users = await user.find();

    // Se devulve al cliente u arreglo con los datos de los usuarios.
    return res.json(users);
}

// controlador para crear nuevo usuario en la base de datos.
ctrlUser.postUser = async (req, res)=>{
    // Se obtienen los datos enviados por método Post
    const {username, password, email}=req.body;

    // Se instancia un nuevo documento de Mongodb para luego ser guardada.
    const newUser = new URLSearchParams({
        username,
        password,
        email
    });

return res,json({
    msg: 'Usuario creado correctamente',
    user
})
}

// Controlador para actualizar un usuario, requiere que envie ID de usuario.
ctrlUser.putUser=async(req,res)=>{
    return req.json({
        msg:''
    })
};

module.exports = ctrlUser;