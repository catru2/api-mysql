const db= require("../configs/ConfiDB");
class User{
  
  static createUser(usuarios){
    const sql = "INSERT INTO usuarios(nombre,correo,contrasena,fecha_nacimiento,biografia,fecha_creacion) VALUES (?,?,?,?,?,?)";
    db.query(sql,[usuarios.nombre,usuarios.correo,usuarios.contrasena,usuarios.fecha_nacimiento,usuarios.biografia,usuarios.fecha_creacion],(error,results)=>{
        if(error){
            console.log(error)
        }else{
            console.log(results)
        }
    })
}
    static async getAll(){
    const sql= "SELECT id_usuario,nombre,correo,contrasena,fecha_nacimiento,biografia,fecha_creacion,fecha_actualizacion,eliminado,fecha_eliminado FROM usuarios WHERE eliminado=0 ;"
    const results = await db.promise().query(sql);
    return results[0];
  }
     
static delete(usuarios){
  const sql=" UPDATE usuarios SET eliminado=true ,fecha_eliminado=? WHERE id_usuario=? ";
  db.query(sql,[usuarios.date,usuarios.id_usuario],(error,result)=>{
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }

  })
}

static put(usuarios){
  const sql="UPDATE usuarios SET nombre=?,contrasena=?,biografia=? WHERE id_usuario=?"
  db.query(sql,[usuarios.nombre,usuarios.contrasena,usuarios.biografia,usuarios.id_usuario],(error,result)=>{
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
    }
  })
}

}
module.exports = User;