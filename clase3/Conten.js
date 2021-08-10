
  const fs = require("fs");

const objProducto1 = {
  title: "Escuadras",
  price: 123.5,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};
const objProducto2 = {
  title: "Calculadora",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};
const objProducto3 = {
  title: "Globo T.",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};

 
module.exports=  class Contenedor {
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
      await fs.promises.writeFile(this.file,JSON.stringify(this.datos, null, 2));
    } catch (error) {
      console.log("Error al guardar");
    }
  }
  async getById(id) {
    try {
      const da = await fs.promises.readFile(this.file, "utf-8");
      if (da && JSON.parse(da, null, 2).find((pd) => pd.id === id)) {
        const p = JSON.parse(da, null, 2).find((pd) => pd.id === id);
        return(p);
      } else {
        console.log(`No existe producto con id: ${id}`);
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
        return datos
       
      }
    } catch (error) {
      //  console.log("Error al leer el archivo");
    }
  }
  async deleteById(id){
    try {
      const d = await fs.promises.readFile(this.file, "utf-8");
      if (d && JSON.parse(d, null, 2).find((pd) => pd.id === id)) {        
        const p = JSON.parse(d, null, 2).filter((pd) => pd.id !== id);
        await fs.promises.writeFile(this.file,JSON.stringify(p,null,2))
        console.log(`El producto con id: ${id}, fue eliminado`)
        
      }else{        
        console.log(`No existe producto con id: ${id} `)
   
   }
      
    } catch (error) {
      console.log('Algon anda mal')
    }
  }
  async deleteAll() {
    try {
      await fs.promises.unlink(this.file);
      return null;
    } catch (error) {
      console.log("No se ecuentra el archivo");
    }
  }
};


