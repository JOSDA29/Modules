function banoMascota(mascota) {
    let precio = parseInt(prompt(mascota))
    if (precio == 1) {
        return "$25.000";
    }
    if (precio == 2) {
        return "$35.000";
    }
    if (precio != 1 || precio != 2) {
        return peluqueriaMascota("Dato ingresado no valido, recuerde que si la cita es para un gato digite 1; Si la cita es para un perro digite 2") 
    }   
}

function banoEmpleado(empleado) {
    let empleador = parseInt(prompt(empleado))
    if (empleador == 1) {
        return "Milena"
    }
    if (empleador == 2) {
        return "Rosa"
    }
    if (empleador == 3) {
        return "Maria"
    }
    if (empleador != 1 || empleador != 2) {
        return peluqueriaEmpleado("Dato ingresado no valido, recuerde que Si desea ser atentid@ por Ana digite 1; Si desea ser atentid@ por Claudio digite 2") 
    } 

}

export {banoMascota, banoEmpleado}