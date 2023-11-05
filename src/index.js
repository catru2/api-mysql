require("dotenv").config()
require("./configs/ConfiDB")
const express = require("express");
const app= express();
const PORT= process.env.PORT
const userRoute=require("./routes/usuario.route")

app.use(express.json())
app.use("/api",userRoute)





app.listen(PORT,() => {
console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});