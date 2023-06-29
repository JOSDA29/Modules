function veterinariaMascota(servicio) {
    let precio = parseInt(prompt(servicio))
    if (precio == 1) {
        return "$30.000"
    }
    if (precio == 2) {
        return "$120.000"
    }
    if (precio != 1 || precio !=2) {
        return veterinariaMascota("Dato no valido, recuerde que si la cita es para una consulta digite 1; Si la cita es para una esterilizacion digite 2")
    }
}

function veterinariaEmpleado(empleado) {
    let empleador = parseInt(prompt(empleado))
    if (empleador == 1) {
        return "Raul"
    }
    if (empleador == 2) {
        return "Laura"
    }
    if (empleador != 1 || empleador != 2) {
        return veterinariaEmpleado("Dato no valido, recuerde que si desea ser atentid@ por Raul digite 1; Si desea ser atentid@ por Laura digite 2");
    }
}

export{veterinariaMascota, veterinariaEmpleado}