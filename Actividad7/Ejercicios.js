// Encontrar palabra en una oracion
function encontro(palabra,buscar){
    return palabra.includes(buscar);
}

console.log(encontro("sergio pinon","pi"));

// Dado un arreglo calcular su suma
function sumaarreglo(arreglo){
    let suma=0
    for (let i=0;i<arreglo.length;i++){
        suma=suma+arreglo[i];
    }
    return suma;
}

console.log(sumaarreglo([45,56,32,98,1000,5,23]));