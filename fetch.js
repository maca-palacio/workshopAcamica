

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
        createNews()
    }).catch(error => {
        console.log(error);
    })
}

// funcion que crea la noticia.ç
// tendríamos que hacer un document.get del componente al que vamos a appendear la noticia
function createNews(x) {
    for (let i=0;i<x.length;i++) {
        //generar noticia dinámicamente
    }
}