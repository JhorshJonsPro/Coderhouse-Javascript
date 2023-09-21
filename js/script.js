class productoEstetica{
      constructor(nombre, precio, inventario){
		this.nombre = nombre.toUpperCase();
		this.precio = parseInt(precio);
            this.inventario = parseInt(inventario);
	}
      comprado(){
            if (this.inventario > 0) {
                  this.inventario--;
                  console.log('Compra realizada');
                  console.log('-------------------------------------------');
                  return true
            } else {
                  console.log('compra denegada por falta de inventaio');
                  console.log('-------------------------------------------');
                  return false
            }
            
      }
}

let lista_productos = [];
let productos_comprados = [];

lista_productos[1] = new productoEstetica('Crema para masajes neutra', 2000, 5);
lista_productos[2] = new productoEstetica('Aceite para masajes neutra', 1500, 5);
lista_productos[3] = new productoEstetica('Locion anticeptica', 1000, 5);

let mensaje = `
            <div nombre="${lista_productos[1].nombre}" precio="${lista_productos[1].precio}">  ${lista_productos[1].nombre} - $${lista_productos[1].precio} <input type="button" class="anadir_carro" value="Añadir"> </div>
            <div nombre="${lista_productos[2].nombre}" precio="${lista_productos[2].precio}">  ${lista_productos[2].nombre} - $${lista_productos[2].precio} <input type="button" class="anadir_carro" value="Añadir">  </div>
            <div nombre="${lista_productos[3].nombre}" precio="${lista_productos[3].precio}">  ${lista_productos[3].nombre} - $${lista_productos[3].precio} <input type="button" class="anadir_carro" value="Añadir">  </div>
`;

let compra = parseInt(prompt(mensaje));

while(compra != 0){  
      if (lista_productos[compra].comprado()) {
            productos_comprados.push(compra);
      }
      compra = parseInt(prompt(mensaje));
}


let txt_productos_comprados = '';
let precio_total = 0;
for (const producto of productos_comprados) {
      txt_productos_comprados += `${lista_productos[producto].nombre} - $${lista_productos[producto].precio}      
            `;
      precio_total += lista_productos[producto].precio;
}

let fecha = new Date;
let recibo = `
      ${fecha}
      Usted realizo la compra de los siguientes productos:
            ${txt_productos_comprados}   
      Total a pagar: $${precio_total}         
`;





let parrafo_lista = document.getElementById("lista_productos");
parrafo_lista.innerHTML = mensaje;


let carro_productos = document.getElementById("carro_productos");


let btn_anadir = parrafo_lista.querySelectorAll(".anadir_carro");
btn_anadir.addEventListener("", );

btn_anadir.forEach(btn => {
      btn.addEventListener("click", function (){
            
      })
      btn.parentNode.getAttribute("nombre");
      btn.parentNode.getAttribute("precio");
});




