let xedad=18;
let xfrontera=false;
let xembarazo=true;
let xsem_gestacion=9;
let xano_nac=1971;
let currentTime = new Date();

if ((currentTime.getFullYear()-xano_nac)>=30 && !(xembarazo)) {
    console.log("Mayor a 30 años o cumple");
} else if (xedad>=18 && xfrontera) {
    console.log("Mayor a 18 y es frontera");
} else if (xembarazo && xsem_gestacion>=9){
    console.log("embarazo y mayor de 9 semanas")
} else {
    console.log("No se puede vacunar")
}