/*
Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo
adequado.
Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta com juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));  
}

function aplicarJuros(valor, juros) {
  return valor + (valor * (juros/100));  
}

function valorDoProduto(preco) {
  if (formaDePagamento === 1) {
    console.log(`O valor do produto é ${aplicarDesconto (precoEtiqueta, 10)}.`);
  } else if (formaDePagamento === 2) {
    console.log(`O valor do produto é ${aplicarDesconto(precoEtiqueta, 15)}.`);
  } else if (formaDePagamento === 3) {
    console.log(`O valor do produto é ${precoEtiqueta}.`);
  } else {
   console.log(`O valor do produto é ${aplicarJuros(precoEtiqueta, 10)}, com ${'10%'} de juros.`);
  }  
}



const precoEtiqueta = 100;
const formaDePagamento = 4;

valorDoProduto ()