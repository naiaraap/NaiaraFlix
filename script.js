function adicionarFilme() {
  imgExtensions = ["jpg", "jpeg", "png", "svg", "webp"];
  var filmeFavorito = document.getElementById("filme").value;

  if (new RegExp(imgExtensions.join("|")).test(filmeFavorito)) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    document.getElementById("filme").value = "";
    swal("Endereço de filme inválido");
  }
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;

  document.getElementById("filme").value = "";

  var filmeFavorito = document.getElementById("filme").value;
}