function escrevaMeuNome(nome) {
  return `Olá, ${nome}! `;
}



function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Reginaldo') + 'Maior de idade');
    } else {
      console.log('Menor de idade');
      }
}

verificarIdade(11);