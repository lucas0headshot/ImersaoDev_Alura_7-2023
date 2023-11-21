const filmes = [];



function adicionarFilme() {
  let filme = {};
  
  
  if ((document.getElementById("filme").value).endsWith(".jpg")) {
    filme['poster'] = document.getElementById("filme").value;
  } else {
    return alert("Digite um link de imagem do tipo .jpg!");
  }
  
  if ((document.getElementById("trailer").value).includes("youtube.com")) {
    filme['trailer'] = document.getElementById("trailer").value;
  } else {
    return alert('Digite um link do YouTube válido!');
  }
  
  
  filmes.push(filme);
  let index = 0;
  
  document.getElementById("listaFilmes").innerHTML += '<a href="' + filmes[index]['trailer'] + ' target="_blank" alt="Clique para assistir o trailer"><img src="' + filmes[index]['poster'] + '"></a>';
  
  index++;
}