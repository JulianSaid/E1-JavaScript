// EJERCICIO N° 1

function comparacionParidad(number) {
    const esPar = number % 2 === 0
    if (esPar) {
        console.log(`${number} es un numero par`);
    } else if (number % 2 !== 0 && number % 2 !== 1) {
        console.log("Ingrese un numero por favor");
    } else {
        console.log(`${number} es un numero impar`);
    }
}


// EJERCICIO N° 2

function numeroMayor(number1, number2) {
    if (number1 > number2) {
        console.log(`El numero ${number1} es mayor que el numero ${number2}`);
    }
    else if (number1 == number2) {
        console.log(`Los numeros son iguales`);

    } else {
        console.log(`El numero ${number2} es mayor que el numero ${number1}`);
    }
}

//EJERCICIO N° 3

function multiploDe5(number) {
    const esMultiplo = number % 5 === 0
    if (esMultiplo) {
        console.log(`Es multiplo de 5`);
    } else {
        console.log("No es multiplo de 5");
    }
}

//EJERCICIO N° 4

function imprimirNumeros(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}

//EJERCICIO 5
function imprimirPalabra(number, string) {
    for (let i = 1; i <= number; i++) {
        console.log(i + " string");
    }
}


//EJERCICIO 6

let redes = ["Instagram", "Twitter", "Facebook", "Tiktok"];
let deportes = ["Futbol", "Volley", "Hockey"];

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++)
        console.log(array[i]);
}


//EJERCICIO 7
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function cincoAfuera(array) {
    for (let i = 0; i <= array.length; i++) {
        if (i == 5)
            continue;
        console.log(i);
    }
}

//EJERCICIO 8
//Usar el array arrayNumeros de arriba

function multiplicarArray(array, number) {
    for (let i = 0; i <= array.length; i++) {
        const multiplo = i * number
        console.log(multiplo);
    }
}

// multiplicarArray(arrayNumeros, 5)