class Productos {
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const productoTequenos = new Productos(1,'Tequeños',150,300);
const productoTequeJamon = new Productos(2,'Tequeños de jamón',180,100);
const productoPastelitosPollo = new Productos(3,'Pastelitos de pollo',185,60);
const productoTequeNutella = new Productos(4,'Tequeños de nutella',30,200);
const productoPastelitosCarne = new Productos(5,'Pastelitos de carne',185,60);

const productosExistentes = [productoTequenos, productoTequeJamon, productoPastelitosPollo, productoTequeNutella, productoPastelitosCarne];


const divProductos = document.getElementById('divProductos');

productosExistentes.forEach(e => {
    divProductos.innerHTML += `
    <div id="producto${e.id} " class="card">
    <div class="card-body">
      <h5 class="card-title"> ${e.nombre}</h5>
      <p class="card-text">Precio: ${e.precio}$</p>
      <p class="card-text">Stock: ${e.stock}</p>
      <button id="comprar" class="btn btn-primary button__edit">Comprar</button>
    </div>
  </div>
    `
});



















































































































