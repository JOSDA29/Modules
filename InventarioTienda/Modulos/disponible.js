function disponible() {
    console.log(`\n
     Granos: \n
     arroz:${localStorage.getItem("arroz")}\n
     frijoles:${localStorage.getItem("frijoles")}\n
     lentejas:${localStorage.getItem("lentejas")}\n
     Aseo: \n
     jabon:${localStorage.getItem("jabon")}\n
     limpido:${localStorage.getItem("limpido")}\n
     champu:${localStorage.getItem("champu")}\n
     Carnes: \n
     pescado:${localStorage.getItem("pescado")}\n
     res:${localStorage.getItem("res")}\n
     cerdo:${localStorage.getItem("cerdo")}\n
     Lacteos: \n
     yogurt:${localStorage.getItem("yogurt")}\n
     leche:${localStorage.getItem("leche")}\n
     kumis:${localStorage.getItem("kumis")}\n
     `)
 }
   
 export{disponible};