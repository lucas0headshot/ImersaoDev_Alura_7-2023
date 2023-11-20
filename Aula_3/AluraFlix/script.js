const filmes = [
    {
    id: 1,
    titulo: "Oppenheimer",
    poster: "https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg"
  },
    
  {
    id: 2,
    titulo: "Chappie",
    poster: "https://br.web.img2.acsta.net/pictures/15/02/10/12/43/454047.jpg"
  },
    
  {
    id: 3,
    titulo: "Bob Esponja: O Incrível Resgate",
    poster: "https://br.web.img2.acsta.net/pictures/19/11/14/15/46/2381876.jpg"
  },
];



const listarFilmes = function(filmes, divHTML) {
  let html = '';
  
  filmes.forEach(filme => {
    if (filme['poster'].endsWith(".jpg")) {
      html += '<img src="' + filme['poster'] + '" alt="' + filme['titulo'] + '">';
      html += '<h1>' + filme['titulo'] + '</h1>';
    }
  });
  
  
  return document.getElementById(divHTML).innerHTML = html;
};



document.addEventListener("DOMContentLoaded", function() {
   listarFilmes(filmes, 'filmes');
});