class productoEstetica{
      constructor(id, nombre, precio, inventario){
            this.id = id;
		this.nombre = nombre.toUpperCase();
		this.precio = parseInt(precio);
            this.inventario = parseInt(inventario);
	}

      verificarInventario(cantidad){
            let inventario = this.inventario;
            let resultado = inventario - cantidad;
            if (resultado >= 0) {
                  return true
            } else {
                  return false
            }
      }

      compraCarrito(cantidad){
            if (this.inventario > 0) {
                  this.inventario -= cantidad;
                  return true
            } else {
                  return false
            }
            
      }
}

let lista_productos = []; //listado de productos a mostrar
let productos_carro = []; // productos en localStorage

lista_productos.push(new productoEstetica(1, 'Crema para masajes neutra', 2000, 5)); //creacion de cada producto
lista_productos.push(new productoEstetica(2, 'Aceite para masajes neutra', 1500, 5)); //creacion de cada producto
lista_productos.push(new productoEstetica(3, 'Locion anticeptica', 1000, 5)); //creacion de cada producto

let mensaje = "";
for (let producto of lista_productos) {
      mensaje += "<div id="${producto.id}">  ${producto.nombre} - $${producto.precio} <input type="button" class="anadir_carro" value="Añadir"> </div> <br>"
}

let parrafo_lista = document.getElementById("lista_productos");
parrafo_lista.innerHTML = mensaje; //se muestra la lista de producto en el html con cada boton





let btn_anadir = parrafo_lista.querySelectorAll(".anadir_carro");
btn_anadir.forEach(btn => { // cada vez que se añade un producto se lo añade al array productos_carro
      btn.addEventListener("click", function (){

            let productos_carro_json = localStorage.getItem("productos_en_carro");// traigo del local sotage el arr.json
            productos_carro = JSON.parse(productos_carro_json); //convierto a arr el .json

            idproducto = btn.parentNode.getAttribute("id");
            if (lista_productos[idproducto].verificarInventario(1)) {
                  productos_carro.push(idproducto);

                  productos_carro_json = JSON.stringify(productos_carro); // convierto a json el arr
                  localStorage.setItem("productos_en_carro", productos_carro_json); // guardo en el localStorage al arr

                  alert("producto añadido al carrito con exito");
            }else{
                  alert("sin inventario del producto seleccionado");
            }
      })      
});

function actualizarCarro(lista) {
      let productos_carro_json = localStorage.getItem("productos_en_carro");// traigo del local sotage el arr.json
      productos_carro = JSON.parse(productos_carro_json); //convierto a arr el .json

      let html = "";

      for (let producto of productos_carro) {
            html += "<div id="${lista[producto].id}">  ${lista[producto].nombre} - $${lista[producto].precio} <input type="button" class="eliminar_de_carro" value="Eliminar"> </div> <br>";
      }
      
      let div_carro_productos = document.getElementById("carro_productos");
      div_carro_productos.innerHTML = html;

      let btn_eliminar = div_carro_productos.querySelectorAll(".eliminar_de_carro");
// hasta aca
      btn_eliminar.forEach(btn => { // cada vez que se añade un producto se lo añade al array productos_carro
            btn.addEventListener("click", function (){
      
                  let productos_carro_json = localStorage.getItem("productos_en_carro");// traigo del local sotage el arr.json
                  productos_carro = JSON.parse(productos_carro_json); //convierto a arr el .json
      
                  idproducto = btn.parentNode.getAttribute("id");
                  if (lista_productos[idproducto].verificarInventario(1)) {
                        productos_carro.push(idproducto);
      
                        productos_carro_json = JSON.stringify(productos_carro); // convierto a json el arr
                        localStorage.setItem("productos_en_carro", productos_carro_json); // guardo en el localStorage al arr
      
                        alert("producto añadido al carrito con exito");
                  }else{
                        alert("sin inventario del producto seleccionado");
                  }
            })      
      });
}




//localStorage.removeItem("nombre_dato"); remover localStorage -------------------------

