xnumero1=Number(prompt("Digite Primer numero:"));
xnumero2=Number(prompt("Digite Segundo numero:"));
xnumero3=Number(prompt("Digite Tercer numero:"));

if (xnumero1==xnumero2){
    alert("Primer y Segundo numeros son iguales");
} else if (xnumero2==xnumero3){
    alert("Segundo y Tercer numeros son iguales");
} else if (xnumero1==xnumero3){
    alert("Primer y Tercer numeros son iguales");    
} else if (xnumero1>xnumero2 & xnumero1>xnumero3){
    alert("Primer numero es mayor");
} else if (xnumero2>xnumero1 & xnumero2>xnumero3){
    alert("Segundo numero es mayor");
} else if (xnumero3>xnumero1 & xnumero3>xnumero2){
    alert("Tercer numero es mayor");
}