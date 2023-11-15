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

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  const descontoAvisaDebito = precoEtiqueta * 0.1;
  console.log(`O valor do produto é ${precoEtiqueta - descontoAvisaDebito}.`);
  } else if (formaDePagamento === 2) {
    const descontoAvisaDinheiroouPix = precoEtiqueta * 0.15;
    console.log(`O valor do produto é ${precoEtiqueta - descontoAvisaDinheiroouPix}.`);
      } else if (formaDePagamento === 3) {
        console.log(`O valor do produto é ${precoEtiqueta}.`);
        } else {
          const jurosAcimaDeDoisVezes = precoEtiqueta * 0.1;
          const precoFinal = precoEtiqueta + jurosAcimaDeDoisVezes;
          console.log(`O valor do produto é ${precoFinal}, mais ${jurosAcimaDeDoisVezes} de juros.`);
        }

