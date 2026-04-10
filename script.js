function calcularVolumeFinal(profundidade, volumeInicial) {
  const pressaoSuperficie = 1; // atm
  const pressaoFundo = pressaoSuperficie + (profundidade / 10);

  const volumeFinal = (pressaoSuperficie * volumeInicial) / pressaoFundo;

  return {
    pressaoFundo,
    volumeFinal
  };
}

// Exemplo:
const resultado = calcularVolumeFinal(30, 1);
console.log(resultado);
// { pressaoFundo: 4, volumeFinal: 0.25 }
