const cotacoes = {
  usd: 1.0,
  brl: 5.0,
  eur: 0.85,
  gbp: 0.75,
  jpy: 110.0,
  cad: 1.25
};



document.addEventListener("DOMContentLoaded", function () {
  Object.entries(cotacoes).forEach(([codigo, valor]) => {
    const optionAtual = document.createElement("option");
    optionAtual.value = codigo;
    optionAtual.text = codigo.toUpperCase();
    document.getElementById("cotacaoAtual").appendChild(optionAtual);

    const optionDesejada = document.createElement("option");
    optionDesejada.value = codigo;
    optionDesejada.text = codigo.toUpperCase();
    document.getElementById("cotacaoDesejada").appendChild(optionDesejada);
  });
});


document.getElementById("btnConverter").addEventListener("click", function () {
  const valor = parseFloat(document.getElementById("valor").value);
  const cotacaoAtual = cotacoes[document.getElementById("cotacaoAtual").value];
  const cotacaoDesejada =
    cotacoes[document.getElementById("cotacaoDesejada").value];

  if (
    !isNaN(valor) &&
    cotacaoAtual !== undefined &&
    cotacaoDesejada !== undefined &&
    cotacaoAtual !== cotacaoDesejada
  ) {
    const resultado = parseFloat((valor * cotacaoDesejada) / cotacaoAtual);

    alert(
      valor +
        "" +
        document.getElementById("cotacaoAtual").value.toUpperCase() +
        " em " +
        document.getElementById("cotacaoDesejada").value.toUpperCase() +
        " são " +
        resultado +
        "" +
        document.getElementById("cotacaoDesejada").value.toUpperCase()
    );
  } else {
    alert("Preencha os campos corretamente!");
  }
});
