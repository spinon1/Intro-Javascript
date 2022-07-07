xusu1=prompt("escoja piedra,papel o tijera");
xusu2=prompt("escoja piedra,papel o tijera");

switch (xusu1){
    case "piedra":
        switch (xusu2){
            case "piedra":
                console.log("Empate");
                break;
            case "papel":
                console.log("Gana usu 2");
                break;
            case "tijera":
                console.log("Gana usu 1");
                break;
        }
        break;
    case "papel":
        switch (xusu2){
            case "piedra":
                console.log("Gana usu 1");
                break;
            case "papel":
                console.log("Empate");
                break;
            case "tijera":
                console.log("Gana usu 2");
                break;
        }
        break;
    case "tijera":
        switch (xusu2){
            case "piedra":
                console.log("Gana usu 2");
                break;
            case "papel":
                console.log("Gana usu 1");
                break;
            case "tijera":
                console.log("Gana usu 2");
                break;
        } 
        break;   
}