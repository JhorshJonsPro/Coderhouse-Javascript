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
      Presione 0 si desea abandonar esta pantalla
      Lista de productos a comprar:
            1. ${lista_productos[1].nombre} - $${lista_productos[1].precio}
            2. ${lista_productos[2].nombre} - $${lista_productos[2].precio}
            3. ${lista_productos[3].nombre} - $${lista_productos[3].precio}
`;

let compra = parseInt(prompt(mensaje));

while(compra != 0){  
      if (lista_productos[compra].comprado()) {
            productos_comprados.push(compra);
      }
      compra = parseInt(prompt(mensaje));
}

alert('Final del programa');
console.log('-------------------------------------------');

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

console.log(recibo);








