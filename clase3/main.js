
const fs=require('fs')
 
const Contenedor = require('./Conten')
 
const express = require("express");
const { get } = require('http');
const app = express();
const PORT = 8082;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en Puerto: ${PORT}`);
});
const pd = new Contenedor('archivo.txt');

app.get("/Productos",async ( req, res) => {
async function mostrarTodos(){
  const p = await pd.getAll()
  const d=JSON.parse(p,null,2)
  res.send(d);
}
mostrarTodos();

});
 


app.get("/ProductosRandom", (req, res) => {
  async function mostrarRandom() {
    let maximo = 4,
    minimo = 1;
    function getAleatorio(maximo, minimo) {
      let num =Math.floor(Math.random() * (maximo - minimo))
      return num + minimo;
    }
    const p = await pd.getById(getAleatorio(maximo, minimo));
    res.send(p)
  }
  mostrarRandom();
});
