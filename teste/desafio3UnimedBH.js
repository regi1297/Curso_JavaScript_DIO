// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída(output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

const lines = gets();
const salary = Number(lines);
let percent;

//TODO: Complete os espaços em branco com uma possível solução para o problema

if (                 ) {
  percent = 15;
} else if (               ) {
  percent = 12;
} else if (                  ) {
  percent = 10;
} else if (         ) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (             ) / 100;
const newSalary =            ;
print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");

/* Resposta


const lines = gets();
const salary = Number(lines);
let percent;

//TODO: Complete os espaços em branco com uma possível solução para o problema

if (       salary <= 400.00          ) {
  percent = 15;
} else if (      salary <= 800.00         ) {
  percent = 12;
} else if (       salary <= 1200.00           ) {
  percent = 10;
} else if (   salary <= 2000.00      ) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (     salary * percent         ) / 100;
const newSalary =     salary + reajust       ;
print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");*/