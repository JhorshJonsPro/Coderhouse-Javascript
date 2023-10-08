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


lista_productos.push(new productoEstetica(0, 'Crema para masajes neutra', 2000, 5)); //creacion de cada producto
lista_productos.push(new productoEstetica(1, 'Aceite para masajes neutra', 1500, 5)); //creacion de cada producto
lista_productos.push(new productoEstetica(2, 'Locion anticeptica', 1000, 5)); //creacion de cada producto

let mensaje = "";
for (let producto of lista_productos) {
      mensaje += `<div idproducto="${producto.id}">  ${producto.nombre} - $${producto.precio} <input type="button" class="anadir_carro" value="Añadir"> </div> <br>`;
}

let parrafo_lista = document.getElementById("lista_productos");
parrafo_lista.innerHTML = mensaje; //se muestra la lista de producto en el html con cada boton


arr_local = localStorage.getItem("productos_en_carro");
if(arr_local == null){
      localStorage.setItem("productos_en_carro", ""); // productos en localStorage
}else{
      actualizarCarro(lista_productos);
}


let btn_anadir = parrafo_lista.querySelectorAll(".anadir_carro");
btn_anadir.forEach(btn => { // cada vez que se añade un producto se lo añade al array productos_carro
      btn.addEventListener("click", function (e){

            let productos_carro_json = localStorage.getItem("productos_en_carro");// traigo del local sotage el arr.json
            if (productos_carro_json) {
                  productos_carro = JSON.parse(productos_carro_json); //convierto a arr el .json
            }else{
                  productos_carro = [];
            }            

            idproducto = e.target.parentNode.getAttribute("idproducto");
            if (lista_productos[idproducto].verificarInventario(1)) {
                  console.log(productos_carro);
                  productos_carro.push(idproducto);

                  productos_carro_json = JSON.stringify(productos_carro); // convierto a json el arr
                  localStorage.setItem("productos_en_carro", productos_carro_json); // guardo en el localStorage al arr

                  alert("producto añadido al carrito con exito");
                  actualizarCarro(lista_productos);
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
            html += `<div idproducto="${lista[producto].id}">  ${lista[producto].nombre} - $${lista[producto].precio} <input type="button" class="eliminar_de_carro" value="Eliminar"> </div> <br>`;
      }
      
      let div_carro_productos = document.getElementById("carro_productos");
      div_carro_productos.innerHTML = html;

      let btn_eliminar = div_carro_productos.querySelectorAll(".eliminar_de_carro");

      btn_eliminar.forEach(btn => { // cada vez que se elimina un producto se lo elimina del local storage
            btn.addEventListener("click", function (e){
      
                  let productos_carro_json = localStorage.getItem("productos_en_carro");// traigo del local sotage el arr.json
                  productos_carro = JSON.parse(productos_carro_json); //convierto a arr el .json
      
                  idproducto = e.target.parentNode.getAttribute("idproducto");
                  let status = productos_carro.indexOf(idproducto);
                  if(status != -1){
                        alert("en breve se elimina el producto");
                        if(productos_carro.splice(status, 1)){
                              console.log(productos_carro);
                              productos_carro_json = JSON.stringify(productos_carro); // convierto a json el arr
                              
                              localStorage.setItem("productos_en_carro", productos_carro_json);// guardo el json

                              alert("producto eliminado del carrito");
                              e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                        }else{
                              alert("no se pudo eliminar el producto del carrito");
                        }
                        
                  }else{
                        alert("el producto no existe en el carrito");
                  }                  
            })      
      });
}



function fnNueva(){
      let precio = 1;
      let resultado = fetch("https://api.bluelytics.com.ar/v2/latest");
      resultado 
            .then(response => response.json())
            .then(data => {
                  precio = data.blue.value_buy
                  let div_dolar = document.getElementById("dolar");
                  div_dolar.innerHTML = `el valor del dolar blue es de $${precio}`;
            })
      
      
}

setTimeout( fnNueva , 2000);



