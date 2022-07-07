xnum1=Number(prompt("Digita un numero:"));
xnum2=Number(prompt("Digita otro numero:"));

switch (xnum1<xnum2){
    case true:
        alert("El numero menor es"+xnum1);
        break;
    case false:
        alert("El numero menor es: "+xnum2);
        break;
}