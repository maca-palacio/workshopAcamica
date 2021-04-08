
const api_key = '29225d019bba46d286e4bed94635339e';

function Search() {
    async function newSearch(q) {
        const url = "https://newsapi.org/v2/everything?q="+q"&from=2021-03-08&sortBy=publishedAt&apiKey="+api_key;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }

    // fetch con promesa
    let input_value = /*valor del input buscador*/
    let info = newSearch(input_value);
    info.then(response => {
        //funcion que crea la noticia.
        noticia = createNews();
        // al final del proceso hace append al contenedor
        news_ctn.appendChild(noticia);
    }).catch(error => {
        console.log(error);
    })

}           



// funcion que crea la noticia.
// document.get del componente al que vamos a appendear la noticia
news_ctn = document.getElementById("contenedor-noticias");
function createNews(x) {
    if (/*total results === 0 */) {
        console.error("no se encontraron noticias con esa palabra");
    }
    else {
        for (let i=0;i<1;i++) {
            //generar noticia dinámicamente
            let title = document.getElementById("titulo");
            title.innerHTML = /* posicion del JSON correspondiente*/
            let photo = document.getElementById("imagen-noticia");
            photo.className = /*clase estilo imagenes */
            photo.setAttribute("src", /* posicion del JSON corresp*/)
            let content = document.getElementById("texto-noticia");
            content.innerHTML = /* posicion del JSON corresp */
        }
    }
}

