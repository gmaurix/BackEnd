fs = require("fs");

const objProducto1 = {
  title: "Escuadra",
  price: 123.45,
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',

}

const objProducto2 = {
  title: "Calculadora",
  price: 123.45,
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
}


class Contenedor {
  constructor(file) {
    this.file = file
    this.datos = [objProducto1,objProducto2]
    this.id = 0
  }

  async save(obj) {
    await this.getAll();
    this.id++;
    this.datos.push({
      id: this.id,
      product: obj,
    });
    try {
      await fs.promises.writeFile(this.file, JSON.stringify(this.datos));
    } catch (error) {
      console.log('Error al guardar');
    }
  }

  getById() {}

  async getAll() {
    try {
      const datos = await fs.promise.redFile(this.file, "utf-8");
      if (datos) {
         //convertir datos tipo string a objeto
          
        this.datos = JSON.parse(datos);

        this.datos.map((producto) => {
          if (this.id < producto.id) this.id = producto.id;
        });
      }
    } catch (error) {
      console.log("Error al leer el archivo");
    }
  }
}

const contenedor = new Contenedor("archivo.txt");
function fn() {
  contenedor.save(objProducto1);
}

fn()