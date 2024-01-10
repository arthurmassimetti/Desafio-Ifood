//Ifood test to estagio
//fazer um sistema que reconheça o numero
//descobre se ele é multiplo de 3 e 5
//e apresenta determinadas frases para os numeros

//Projeto abaixo
//Autor: Arthur Massimetti 
//Linguagem usada: JavaScript

function verificarMultiplos(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
        console.log("Fizz");
    } else if (numero % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}


verificarMultiplos(125);

