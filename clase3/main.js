const fs=require('fs')
const Contenedor = require('Contenedor.js')
 
const express = require("express");
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en Puerto: ${PORT}`);
});

/* app.get("/Productos",async ( req, res) => {
  const p = await conten.getAll()
  res.send(p)
});
 *///app.get(express.static('archivo.txt'))

app.get('/ProductosRandom',(req,res)=>{
 res.send('algo')
    
});
