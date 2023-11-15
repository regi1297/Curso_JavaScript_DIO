class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
    }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
  }
}


function copararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
  return `${p1.nome} é mais velho(a) que ${p2.nome}.`;
  } else if (p1.idade < p2.idade) {
  return `${p2.nome} é mais velho(a) que ${p1.nome}.`;
  } else {
return `${p1.nome} e ${p2.nome} tem mesma idade!`;
}
}
const pessoaA = new Pessoa('Luiz', 68);
const pessoaB = new Pessoa('Maria', 68);
console.log(copararPessoas(pessoaA, pessoaB));
