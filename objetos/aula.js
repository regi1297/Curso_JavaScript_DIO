const pessoa = {
  nome: 'Reginaldo Miranda',
  idade: 40,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
  }
};

const atributo = 'idade';

console.log(pessoa[atributo])
