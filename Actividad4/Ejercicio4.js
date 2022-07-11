let xnum1=Number(prompt("Digite inicio de rango:"));
let xnum2=Number(prompt("Digite fin de rango:"));

for (var i=1; i<= 100; i++){
    if (i<xnum1 || i>xnum2){
        console.log("Variable:"+i);
    }
}