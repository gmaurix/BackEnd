const fs=require('fs')

class Contenedor {
  constructor(file) {
    this.file = file;
    this.datos = [];
    this.id = 0;
  }
  async save(obj) {
    await this.getAll();
    this.id++;
    this.datos.push({
      id: this.id,
      product: obj,
    });

    try {
      await fs.promises.writeFile(
        this.file,
        JSON.stringify(this.datos, null, 2)
      );
    } catch (error) {
      console.log("Error al guardar");
    }
  }
  async getById(id) {
    try {
      const da = await fs.promises.readFile(this.file, "utf-8");
      if (da) {
        const p = JSON.parse(da, null, 2).find((pd) => pd.id === id);
        console.log(p);
      } else {
        console.log("No existe producto con id");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const datos = await fs.promises.readFile(this.file, "utf-8");
      if (datos) {
        //convertir datos tipo string a objeto
        this.datos = JSON.parse(datos, null, 2);
        this.datos.map((producto) => {
          if (this.id < producto.id) this.id = producto.id;
        });
        console.log(datos);
      }
    } catch (error) {
      //  console.log("Error al leer el archivo");
    }
  }

  async deleteById(id) {
    try {
      const d = await fs.promises.readFile(this.file, "utf-8");
      if (d) {
        const p = JSON.parse(d, null, 2).filter((pd) => pd.id !== id);
        await fs.promises.writeFile(this.file, JSON.stringify(p, null, 2));
        console.log(`El producto con id: ${id}, fue eliminado`);
      } else {
      }
    } catch (error) {
      console.log("Algon anda mal");
    }
  }
}
  
const conten = new Contenedor("archivo.txt");
  

const express = require("express");

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en Puerto: ${PORT}`);
});
//server.on("error", (error) => console.log(`Hubo un error ${error}`));

app.get("/Productos", (req, res) => {
  
  const getProductos = () => {
    const p = conten.getAll();
    return new Promise((resolve, reject) => {
      if (p) {
        return resolve(console.log(p));
      } else {
        return reject(console.log("error"));
      }
    });
  };
  async function getTodos() {
    try {
      const pa = await getProductos();
      return pa
    } catch (error) {
      console.log(error);
    }
  }
  const pd = getTodos();
  res.json(pd + "sadad");
});
//app.get(express.static('archivo.txt'))

app.get('/ProductosRandom',(req,res)=>{

    
} )
