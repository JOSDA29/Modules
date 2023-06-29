/*
Programa para la veterinaria MundoAnimal.
Author: Joseph Quintero
Fecha: 25/05/2023
Licencia GPL
*/
import { peluqueriaMascota, peluqueriaEmpleado } from "./Servicios/peluqueria.js";
import { banoMascota, banoEmpleado } from "./Servicios/bano.js";
import { veterinariaMascota, veterinariaEmpleado } from "./Servicios/veterinaria.js";

function especificaciones() {
    let servicios = parseInt(prompt("Bienvenido a la veterinaria MundoAnimal, Si desea agendar un baño digite 1; Si desea agendar una cita en peluqueria digite 2; Si desea agendar cita con veterinaria digite 3"))
    
    if (servicios == 1) {
        let valor = banoMascota("Si la cita es para un gato digite 1; si es para un perro digite 2") ; 
        let empleado = banoEmpleado("Si desea solicitar la atencion de Milena digite 1; si desea la de Rosa digite 2; si desea la de Maria digite 3")
        let fecha = prompt("Para cuando desea agendar su cita, escriba la fecha de la siguiente manera (dia/mes/año)")
        let nombre = prompt("Por ultimo dinos tu nombre")
        console.log("Querid@",nombre,"su cita para el servicio de baño ha quedado agendado para el proximo",fecha,"con el/la emplead@",empleado,"con un valor de",valor);
        }
    
    if (servicios == 2) {
        let valor = peluqueriaMascota("Si la cita es para un gato digite 1; Si la cita es para un perro digite 2") ; 
        let empleado = peluqueriaEmpleado("Si desea ser atentid@ por Ana digite 1; Si desea ser atentid@ por Claudio digite 2")
        let fecha = prompt("Para cuando desea agendar su cita, escriba la fecha de la siguiente manera (dia/mes/año)")
        let nombre = prompt("Por ultimo dinos tu nombre")
        console.log("Querid@",nombre,"su cita para el servicio de peluqueria ha quedado agendado para el proximo",fecha,"con el/la emplead@",empleado,"con un valor de",valor);
        }

    if (servicios == 3) {
        let valor = veterinariaMascota("Si la cita es para una consulta digite 1; Si la cita es para una esterilizacion digite 2") ; 
        let empleado = veterinariaEmpleado("Si desea ser atentid@ por Raul digite 1; Si desea ser atentid@ por Laura digite 2")
        let fecha = prompt("Para cuando desea agendar su cita, escriba la fecha de la siguiente manera (dia/mes/año)")
        let nombre = prompt("Por ultimo dinos tu nombre")
        console.log("Querid@",nombre,"su cita para el servicio de veterinaria ha quedado agendado para el proximo",fecha,"con el/la emplead@",empleado,"con un valor de",valor);
        }
    }

especificaciones()