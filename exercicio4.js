console.log()

const prompt = require('prompt-sync')();

console.log('Coloque 1° número ENTER depois o outro e lembrece do maior número primeiro')
console.log()
let numeroA = prompt('Coloque um número inteiro')
let numeroB = prompt('Coloque o segungo número inteiro')

resultado =numeroA%numeroB;

if(resultado == 0){
    console.log('São multiplos')
}else{
    console.log('Não são multiplos')
}

/* exercicio 4 dos Exercícios de Fixação Aula3 */

/* Faça um programa que leia 2 valores inteiros (A e B).
 Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos",
  indicando se os valores lidos são múltiplos entre si.   */

  