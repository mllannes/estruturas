function dividenoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)]
  encontraMenores(pivo, array)
  let valoresMenores = 0

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando]
    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores)
    }
  }

  return array
}
