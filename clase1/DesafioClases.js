//Declarar clase Usuraio
//

class Usuario {
  constructor(nombre, apellido, libros={} , mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros=libros;          
    this.mascotas = mascotas;
  }
   // metodo obtener nombre completo
  getFullName() {
    return this.nombre + " " + this.apellido;
  }
  //metodo añadir mascota
  addMascotas(m) {
    this.mascotas.push(m);
  }
  //metodo obtener mascotas
  getMascotas() {
    return this.mascotas;
  }
  //metodo contar mascotas
  countMascotas() {
    let c=0;  
    return c=this.mascotas.length; 
    }
  //metodo añadir libro
    addBooks(l){
      this.libros.push(l);
    }
  //metodo obtener nombre de libros
  getBookNames(){
    let titulos=[];
     for (let i = 0; i < this.libros.length;i++ ) {
        titulos.push(this.libros[i].nameLibro);
     }
     return  titulos;
  }
};

const p = new Usuario(
  "Mauri",
  "Gautero",
  [
    { nameLibro: "Homo Deus", autor: "Yuval Harari" },
    { nameLibro: "Homo Sapiens", autor: "Yuval Harari" },
  ],
  ["Flocky", "Max"]
);

console.log(p.getFullName());
p.addMascotas("Coli");
console.table(p.getMascotas());
console.log(p.countMascotas());
const l={nameLibro:"Rayuela",autor:"Cortázar"}
p.addBooks(l);
console.table(p.getBookNames());

