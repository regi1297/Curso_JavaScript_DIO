/*Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2- Preço da gasolina;
3- Tipo de combustível que está no seu carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar a viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
// Calcula quantos litros são necessários para completar a viagem
const tipoCombustivel = 'Gasolina'; // pode ser "gasolina" ou "etanol"

const litrosConsumidos = (distanciaEmKm / kmPorLitro);
// Calcule o total a ser pago com o combustível

if (tipoCombustivel === 'Etanol') {
  const valorGasto= (litrosConsumidos * precoEtanol);
  console.log(`O valor a ser gasto na viagem é R$ ${valorGasto.toFixed(2)}`);
} else  {
  const valorGasto= (litrosConsumidos * precoGasolina);
  console.log(`O valor a ser gasto na viagem é R$ ${valorGasto.toFixed(2)}`);
}

