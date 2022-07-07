let xnombre=prompt("Digite su nombre:");
let xedad=Number(prompt("Digite su edad"));

if (xedad>=18){
    console.log("Puede entrar");
    if (xnombre=="Mario" || xnombre=="Carlos"){
        console.log("en VIP");
    }
} else {
    console.log("No puede entrar");
}