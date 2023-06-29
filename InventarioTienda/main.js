/*
Programa para la veterinaria MundoAnimal.
Author: Joseph Quintero
Fecha: 25/05/2023
Licencia GPL
*/
import { productos } from "./Modulos/model.js";
import { disponible } from "./Modulos/disponible.js";
import { ingresarproducto } from "./Modulos/ingresar.js";
import { eliminarProducto } from "./Modulos/eliminar.js";
productos();
function opciones() {
    let opciones = parseInt(prompt("¿Que desea hacer?,\n 1.Mostrar productos.\n 2.Ingresar producto.\n 3.Eliminar producto"))
    if (opciones == 1) {
        disponible()
    }
    if (opciones == 2) {
        let ingresar = ingresarproducto("¿A que categoria desea ingresar el producto? 1.Granos, 2.Aseo, 3.Carnes, 4.Lacteos")
        console.log(ingresar);
        let contenido = prompt("Desea ver contenido, escriba s para Si")
        if (contenido == "s") {
            disponible();
        } else {
            console.log("Gracias por usar el sistema");
        }
    }
    if (opciones == 3) {
        let eliminar = eliminarProducto("¿A que categoria desea ingresar el producto? 1.Granos, 2.Aseo, 3.Carnes, 4.Lacteos")
        console.log(eliminar);
        let contenido = prompt("Desea ver contenido, escriba s para Si")
        if (contenido == "s") {
            disponible();
        } else {
            console.log("Gracias por usar el sistema");
        }
    }
    if (opciones <= 0 || opciones >=4) {
        console.log("Dato no valido");
    }
}
opciones()