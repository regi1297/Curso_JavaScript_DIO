/*
o IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.to();

Formula do IMC:
IMC = Peso / (altura * altura)

Elabore um algorítimo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto Condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18,5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave.
*/

const peso = 70
const altura = 1.65
const imc = peso / Math.pow(altura,2);

if(imc < 18.5){
  console.log(`Seu IMC é ${imc.toFixed(2)} você está abaixo do peso`);
  }else if(imc >= 18.5 && imc <= 25){
    console.log(`Seu IMC é ${imc.toFixed(2)} você tem o peso ideal.`);
    } else if(imc > 25 && imc <= 30){
      console.log(`Seu IMC é ${imc.toFixed(2)} você está com acima do peso.`);
      } else if(imc > 30 && imc <= 40){
        console.log(`Seu IMC é ${imc.toFixed(2)} você está obeso.`);
        } else{
          console.log(`Seu IMC é ${imc.toFixed(2)} você está com obesidade grave.`);
          }

