xarreglo=[1,4,6,10,22,55,46,2,5,0];
xarreglo_ordenado=xarreglo.sort(function(a, b){return a-b});

for (let i=0; i<xarreglo_ordenado.length;i++){
    console.log("Numero array["+i+"]="+xarreglo_ordenado[i]);
}