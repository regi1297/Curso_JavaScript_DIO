/*Faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar a viagem
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;
// Calcula quantos litros são necessários para completar a viagem
const litrosConsumidos = (distanciaEmKm / kmPorLitro);
// Calcule o total a ser pago com o combustível
const valorGasto= (litrosConsumidos * precoCombustivel);
console.log(`O valor a ser gasto na viagem é R$ ${valorGasto.toFixed(2)}`);

