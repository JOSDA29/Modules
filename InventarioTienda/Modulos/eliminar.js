function eliminarProducto(categoria) {
    let tipo = parseInt(prompt(categoria))
    if (tipo == 1) {
        let producto = prompt("¿Cual es el producto que desea eliminar? 1.arroz, 2.frijoles ,3.lentejas")
        if (producto == 1) {
            let cantidad = localStorage.getItem("arroz");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("arroz",parseInt(cantidad)-disminucion)
            return `La cantidad de arroz ha sido actualizada a ${localStorage.getItem("arroz")}`
            
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("frijoles");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("frijoles",parseInt(cantidad)-disminucion)
            return `La cantidad de frijoles ha sido actualizada a ${localStorage.getItem("frijoles")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("lentejas");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("lentejas",parseInt(cantidad)-disminucion)
            return `La cantidad de lentejas ha sido actualizada a ${localStorage.getItem("lentejas")}`
        }
    }
    if (tipo == 2) {
        let producto = prompt("¿Cual es el producto que desea eliminar? 1.jabon, 2.limpido ,3.champu")
        if (producto == 1) {
            let cantidad = localStorage.getItem("jabon");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("jabon",parseInt(cantidad)-disminucion)
            return `La cantidad de jabon ha sido actualizada a ${localStorage.getItem("jabon")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("limpido");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("limpido",parseInt(cantidad)-disminucion)
            return `La cantidad de limpido ha sido actualizada a ${localStorage.getItem("limpido")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("champu");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("champu",parseInt(cantidad)-disminucion)
            return `La cantidad de champu ha sido actualizada a ${localStorage.getItem("champu")}`
        }

    }
    if (tipo == 3) {
        let producto = prompt("¿Cual es el producto que desea eliminar? 1.pescado, 2.res ,3.cerdo")
        if (producto == 1) {
            let cantidad = localStorage.getItem("pescado");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("pescado",parseInt(cantidad)-disminucion)
            return `La cantidad de pescado ha sido actualizada a ${localStorage.getItem("pescado")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("res");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("res",parseInt(cantidad)-disminucion)
            return `La cantidad de res ha sido actualizada a ${localStorage.getItem("res")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("cerdo");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("cerdo",parseInt(cantidad)-disminucion)
            return `La cantidad de cerdo ha sido actualizada a ${localStorage.getItem("cerdo")}`
        }

    }
    if (tipo == 4) {
        let producto = prompt("¿Cual es el producto que desea eliminar? 1.yogurt, 2.leche ,3.kumis")
        if (producto == 1) {
            let cantidad = localStorage.getItem("yogurt");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("yogurt",parseInt(cantidad)-disminucion)
            return `La cantidad de yogurt ha sido actualizada a ${localStorage.getItem("yogurt")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("leche");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("leche",parseInt(cantidad)-disminucion)
            return `La cantidad de leche ha sido actualizada a ${localStorage.getItem("leche")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("Kumis");
            let disminucion = parseInt(prompt("¿Cuantos productos desea eliminar?"))
            localStorage.setItem("Kumis",parseInt(cantidad)-disminucion)
            return `La cantidad de kumis ha sido actualizada a ${localStorage.getItem("kumis")}`
        }

    }
}

export {eliminarProducto}