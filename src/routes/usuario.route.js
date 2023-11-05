const usuarioController=require("../controllers/usuario.controller")
const express=require("express")
const router=express.Router()


const verifyToken = require("../middlewares/auth.middleware")

router.get("/usuarios" ,usuarioController.getUser)
router.post("/usuarios",usuarioController.postUser)
router.delete("/usuarios/:id",usuarioController.deleteUser)
router.put("/usuarios/:id",usuarioController.putUser)


module.exports=router
