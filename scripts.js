var listaFilmes = ["https://static.metacritic.com/images/products/movies/9/e97f53a83fc8164369f954313e451e74.jpg", "https://upload.wikimedia.org/wikipedia/pt/8/88/ButtonPoster.jpg", "https://upload.wikimedia.org/wikipedia/pt/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png"]

listaFilmes.push("https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg")

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">")
    }