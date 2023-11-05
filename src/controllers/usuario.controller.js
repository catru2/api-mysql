const User = require("../models/user.model");


const postUser = async (req,res)=>{
    try { 
        const usuarios   = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasena:req.body.contrasena,
            fecha_nacimiento:req.body.fecha_nacimiento,
            biografia: req.body.biografia,
            fecha_creacion: new Date()
        }
        console.log(usuarios)

        User.createUser(usuarios)
        return res.status(201).json({
            message: "se creo al usuario correctamente",
            data:usuarios,
        })
    } catch (error) {
        return res.status(500).json({
            message: "error al crear al usuario ",
            error: error.message
        })
    }
}

const getUser = async (req,res)=>{
    try{
        const data =await User.getAll();
        console.log(data)
        return res.json({
            message:"se encontraron los datos correctamente",
            data:data
        })  }catch(error){
        res.status(500).json({
            message:"error al obtener datos",
            error: error.message,
        })
    }
}

  const deleteUser= (req,res)=>{
    //eliminado logico
    try{
        const usuarios ={
            date:new Date(),
            id_usuario:req.params.id,
        }
        User.delete(usuarios)
        return res.status(200).json({
            message:"se elimino al usuario",
        })
    } catch(error){
        return res.status(500).json({
            message:"error al elminar un blog",
            error:error.message
        })
    }
  }

  const putUser= (req,res)=>{
    try{
        const usuarios={
            id_usuario:req.params.id,
            nombre: req.body.nombre,
            contrasena:req.body.contrasena,
            biografia: req.body.biografia,
        }
        User.put(usuarios)
        return res.status(200).json({
            message:"se actualizo correctamente al usuario",
        })
    }catch(error){
        return res.status(500).json({
            message:"error al actualizar un blog",
            error:error.message
        })
    }
    
  }

module.exports={
   getUser,
   postUser,
   deleteUser,
   putUser
}