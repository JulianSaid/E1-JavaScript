function comparacionParidad(number) {
    const esPar = number % 2 === 0
    if (esPar) {
        console.log(`${number} es un numero par`);
    } else if (number % 2 !== 0 && number % 2 !== 1 ) {
        console.log("Ingrese un numero por favor");
    } else {
        console.log(`${number} es un numero impar`);
    }
}

comparacionParidad("")

