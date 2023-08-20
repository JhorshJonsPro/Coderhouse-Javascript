function lista_productos(opcion_cero){
      return`

      Seleccione el producto que quiera comprar (SOLO EL NUMERO)
            0.  ${opcion_cero}

            1.  $2000 - Crema para masajes neutra
            2.  $1500 - Aceite para masajes neutra
            3.  $1000 - Locion anticeptica
`
} 

function precio_producto_seleccionado(seleccion) {
      if (seleccion == 1) {
            return 2000
      }else if (seleccion == 2) {
            return 1500
      }else if (seleccion == 3) {
            return 1000
      }
}


let precio_total = 0;
alert('Bienvenido a la tienda de productos');

let opcion_cero = 'seleccione esta opcion para salir de esta pantalla';
let producto_seleccionado = prompt('Lista de productos ' + lista_productos(opcion_cero));
producto_seleccionado = parseInt(producto_seleccionado);

if (producto_seleccionado >= 1 && producto_seleccionado <= 3) {
      opcion_cero = 'Seleccione esta opcion para finalizar la seleccion y calcular precio';
      while(producto_seleccionado >= 1 && producto_seleccionado <= 3){
            precio_total = precio_total + precio_producto_seleccionado(producto_seleccionado);
            producto_seleccionado = prompt('Lista de productos ' + lista_productos(opcion_cero));
            producto_seleccionado = parseInt(producto_seleccionado);
      }
      alert('El precio total es de $' + precio_total);
}else{
      alert('Vuelva pronto xd');
}






