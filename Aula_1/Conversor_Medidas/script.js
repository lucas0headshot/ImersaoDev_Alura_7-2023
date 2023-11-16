const unidades = {
  m: 1.0,
  cm: 100.0,
  mm: 1000.0,
  km: 0.001,
  pol: 39.3701,
  pe: 3.28084,
  j: 1.09361,
  ly: 946000000000000000
};




document.addEventListener("DOMContentLoaded", function () {
  Object.entries(unidades).forEach(([codigo, valor]) => {
    const optionAtual = document.createElement("option");
    optionAtual.value = codigo;
    optionAtual.text = codigo.toUpperCase();
    document.getElementById("unidadeAtual").appendChild(optionAtual);

    const optionDesejada = document.createElement("option");
    optionDesejada.value = codigo;
    optionDesejada.text = codigo.toUpperCase();
    document.getElementById("unidadeDesejada").appendChild(optionDesejada);
  });
});


document.getElementById("btnCalcular").addEventListener("click", function () {
  const medida = parseFloat(document.getElementById("medida").value);
  const unidadeAtual = unidades[document.getElementById("unidadeAtual").value];
  const unidadeDesejada =
    unidades[document.getElementById("unidadeDesejada").value];

  if (
    !isNaN(medida) &&
    unidadeAtual !== undefined &&
    unidadeAtual !== undefined &&
    unidadeAtual !== unidadeDesejada
  ) {
    const resultado = parseFloat((medida * unidadeDesejada) / unidadeAtual);

    alert(
      medida +
        "" +
        document.getElementById("unidadeAtual").value.toUpperCase() +
        " em " +
        document.getElementById("unidadeDesejada").value.toUpperCase() +
        " são " +
        resultado +
        "" +
        document.getElementById("unidadeDesejada").value.toUpperCase()
    );
  } else {
    alert("Preencha os campos corretamente!");
  }
});