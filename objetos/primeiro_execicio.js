/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio por quilômetro rodado.
Crie um método que dado a quantidade de quilômetro e o preço do combustível nos de o valor
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
      return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel;
      }
}


const HRV = new Carro('Honda', 'Prata', 1 / 6);
console.log(HRV.calcularGastoDePercurso(70, 5));

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Prata', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));