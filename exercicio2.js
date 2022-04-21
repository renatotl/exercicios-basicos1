console.log()

const prompt =require('prompt-sync')();

console.log('As notas deveram ser de 1 a 10 ')
console.log()
let nota1 = +prompt('Digite a 1° nota do aluno ')
let nota2 = +prompt('Digite a 2° nota do aluno ')
let nota3 = +prompt('Digite a 3° nota do aluno ')
let nota4 = +prompt('Digite a 4° nota do aluno ')
console.log()
let media = (nota1+nota2+nota3+nota4)/4;

console.log()

console.log('media',media);
console.log()


if(media >= 7){
    console.log('Aprovado')
}else if(media >=5 && media <=6){
    console.log('Reprovado')
}else{
    console.log('Reprovado')
}
console.log()

/* exercicio 2 dos Exercícios de Fixação Aula3 */

/*  
Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.  */

