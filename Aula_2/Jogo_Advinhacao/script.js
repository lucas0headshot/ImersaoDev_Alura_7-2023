document.addEventListener("DOMContentLoaded", function() {
  const numeroSecreto = Math.floor(Math.random() * 101) + 1;
  var chances = 5;
  
  
  function alertarChancesRestantes() {
    return alert("Você ainda tem " + chances + " chances...");
  }

  
  document.getElementById("btnChutar").addEventListener("click", function() {
    if (chances > 0) {
      let chute = parseInt(document.getElementById("chute").value);
      
      if (!isNaN(chute)) {
        if (chute > 0) {
          if (chute == numeroSecreto) {
            alert("Acertou! O número secreto é " + numeroSecreto);

          } else {
            chances--;

            if (chute > numeroSecreto) {
              alert("Errou... o número secreto é menor que " + chute);
              alertarChancesRestantes();
              
            } else if (chute < numeroSecreto) {
              alert("Errou... o número secreto é maior que " + chute);
              alertarChancesRestantes();
            }
          }
          
        } else {
          alert("Digite um número maior que 0!");
        }
        
      } else {
        alert("Digite o campo corretamente!");
      }
      
    } else {
      alert("Suas chances acabaram! :/");
      document.getElementById("btnChutar").setAttribute("disabled", "true");
    }
  })
});