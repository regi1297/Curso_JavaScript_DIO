/*condicional boolean>
usa mais 3 iguais
*/

const numero = 0;

const numeroDivisivelPor5 = (numero % 2) === 0;

if (numero === 0) {
  console.log('O número é inválido');
}
else if (numero) {
  console.log('Par');
} else {
  console.log('Impar');
}