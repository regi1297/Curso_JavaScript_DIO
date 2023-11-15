/*
2- Crie uma Classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
instancie uma pessoa chamada José que tenha 70Kg de peso e 1.75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class pessoa {
  nome;
  peso;
  altura;

  constructor(nome,peso,altura){
    this.nome=nome;
    this.peso=peso;
    this.altura=altura;
  }

calcularImc(){{
      return this.peso / (this.altura * this.altura);
    }
}

classificarImc() {
  const imc = this.calcularImc();
  if (this.imc < 18.5) {
    return (`você está abaixo do Peso.`);
    } else if (imc >= 18.5 && imc <= 25) {
      return (`você tem um peso normal.`);
      } else if (imc > 25 && imc <= 30) {
        return (`você está com Sobrepeso.`);
        } else if (imc > 30 && imc <= 40) {
          return (`obeso.`);
          } else {
            return (`obesidade Grave.`);
              }
              }
}

const jose = new pessoa("José", 70, 1.75)
console.log(`O IMC de ${jose.nome} é: ${jose.classificarImc()}`);

const reginaldo = new pessoa("Reginaldo", 90, 1.65)
console.log(`O IMC de ${reginaldo.nome} é: ${reginaldo.classificarImc()}`);

