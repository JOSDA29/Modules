function peluqueriaMascota(mascota) {
    let precio = parseInt(prompt(mascota))
    if (precio == 1) {
        return "$40.000";
    }
    if (precio == 2) {
        return "$30.000";
    }
    if (precio != 1 || precio != 2) {
        return peluqueriaMascota("Dato ingresado no valido, recuerde que si la cita es para un gato digite 1; Si la cita es para un perro digite 2") 
    }     
}

function peluqueriaEmpleado(empleado) {
    let empleador = parseInt(prompt(empleado))
    if (empleador == 1) {
        return "Ana";
    }
    if (empleador == 2) {
        return "Claudio";
    }
    if (empleador != 1 || empleador != 2) {
        return peluqueriaEmpleado("Dato ingresado no valido, recuerde que si desea ser atentid@ por Milena digite 1; Si desea ser atentid@ por Rosa digite 2; Si desea ser atentid@ por Maria digite 3") 
    } 
}

export {peluqueriaMascota, peluqueriaEmpleado}