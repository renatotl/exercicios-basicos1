const prompt = require('prompt-sync')();
const numero01 = +prompt("Digite aqui um número ");
const numero02 = +prompt("Digite aqui outro número ");

resultado1 = numero01 % 2;
resultado2 = numero02 % 2;

if(resultado1 == 0 ){
    console.log('Par')
}else{
    console.log('Impar')
}

console.log()

if(resultado2 == 0 ){
    console.log('Par')
}else{
    console.log('Impar')
}

/* exercicio 3 dos Exercícios de Fixação Aula3 */

// Faça um programa que leia um número, e informe se ele é par ou impar