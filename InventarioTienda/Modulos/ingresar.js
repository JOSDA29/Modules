function ingresarproducto(categoria) {
    let tipo = parseInt(prompt(categoria))
    if (tipo == 1) {
        let producto = prompt("¿Cual es el producto que desea ingresar? 1.arroz, 2.frijoles ,3.lentejas")
        if (producto == 1) {
            let cantidad = localStorage.getItem("arroz");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("arroz",parseInt(cantidad)+aumento)
            return `La cantidad de arroz ha sido actualizada a ${localStorage.getItem("arroz")}`;
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("frijoles");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("frijoles",parseInt(cantidad)+aumento)
            return `La cantidad de frijoles ha sido actualizada a ${localStorage.getItem("frijoles")} `
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("lentejas");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("lentejas",parseInt(cantidad)+aumento)
            return `La cantidad de lentejas ha sido actualizada a ${localStorage.getItem("lentejas")}`
        }
    }
    if (tipo == 2) {
        let producto = prompt("¿Cual es el producto que desea ingresar?  1.jabon, 2.limpido ,3.champu")
        if (producto == 1) {
            let cantidad = localStorage.getItem("jabon");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("jabon",parseInt(cantidad)+aumento)
            return `La cantidad de jabon ha sido actualizada a ${localStorage.getItem("jabon")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("limpido");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("limpido",parseInt(cantidad)+aumento)
            return `La cantidad de limpido ha sido actualizada a ${localStorage.getItem("limpido")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("champu");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("champu",parseInt(cantidad)+aumento)
            return `La cantidad de champu ha sido actualizada a ${localStorage.getItem("champu")}`
        }

    }
    if (tipo == 3) {
        let producto = prompt("¿Cual es el producto que desea ingresar? 1.pescado, 2.res ,3.cerdo")
        if (producto == 1) {
            let cantidad = localStorage.getItem("pescado");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("pescado",parseInt(cantidad)+aumento)
            return `La cantidad de pescado ha sido actualizada a ${localStorage.getItem("pescado")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("res");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("res",parseInt(cantidad)+aumento)
            return `La cantidad de res ha sido actualizada a ${localStorage.getItem("res")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("cerdo");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("cerdo",parseInt(cantidad)+aumento)
            return `La cantidad de cerdo ha sido actualizada a ${localStorage.getItem("cerdo")}`
        }

    }
    if (tipo == 4) {
        let producto = prompt("¿Cual es el producto que desea ingresar? 1.yogurt, 2.leche ,3.kumis")
        if (producto == 1) {
            let cantidad = localStorage.getItem("yogurt");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("yogurt",parseInt(cantidad)+aumento)
            return `La cantidad de yogurt ha sido actualizada a ${localStorage.getItem("yogurt")}`
        }
        if (producto == 2) {
            let cantidad = localStorage.getItem("leche");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("leche",parseInt(cantidad)+aumento)
            return `La cantidad de leche ha sido actualizada a ${localStorage.getItem("leche")}`
        }
        if (producto == 3) {
            let cantidad = localStorage.getItem("Kumis");
            let aumento = parseInt(prompt("¿Cuantos productos desea ingresar?"))
            localStorage.setItem("Kumis",parseInt(cantidad)+aumento)
            return `La cantidad de kumis ha sido actualizada a ${localStorage.getItem("kumis")}`
        }

    }
}

export{ingresarproducto}