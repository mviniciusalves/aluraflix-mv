function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito) // os parenteses envia as variáreis para outra função
        } else {
    console.error("Endereço de filme inválido")
}
    document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filme) { // os parenteses podem armazenar as variáveis de outros lugares
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}