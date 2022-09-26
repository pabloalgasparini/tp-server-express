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
    const {id, username, password, email}=req.body;

    // Se instancia un nuevo documento de Mongodb para luego ser guardada.
    /*const newUser = new URLSearchParams({
        username,
        password,
        email
    });*/
    const newUser= new User({id,username, password, email});
    console.log(newUser);
     await newUser.save()

return res.json({
    msg: 'Usuario creado correctamente',
    newUser
})
}

// Controlador para actualizar una tarea
ctrlUser.putUser = async (req, res) => {
    const id = req.params.id_user
    const {username, password, email}= req.body;
    try {
        await User.findOneAndUpdate({id},{username,password,email},(err,doc)=>{
            if (err){
                console.log(err)
            }else{
                console.log("Update User: ",doc)
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
// ctrltareas.deletetareas = async (req, res) => {const id = req.params.id_tareas
//     const {title, descripcion}= req.body;
//     try {
//         await tareaModel.findOneAndDelete({id},{title,descripcion},(err,doc)=>{
//             if (err){
//                 console.log(err)
//             }else{
//                 console.log("Update Task: ",doc)
//             }
//         })
//         // const tareasUpdate = await tareaModel.findByIdAndUpdate(id,)
//         return res.json({
//             msg: 'Borrado correctamente'
//         })
//     } catch (error) {
//         return res.json({message: error.message})
//     }
// };

module.exports = ctrlUser;