const prompt = require('prompt-sync')();
const numero1 = +prompt('Digite um número ');
const numero2 = +prompt('Digite outro número ');

if(numero1 > numero2){
    console.log(`o 1° número: ${numero1} é maior`);
}else if(numero2>numero1){
    console.log(`o 2° némero: ${numero2} é maior`);
}else{
    console.log('Os números são iguais!');
}


/* exercicio 1 dos Exercícios de Fixação Aula3 */

/* Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.*/