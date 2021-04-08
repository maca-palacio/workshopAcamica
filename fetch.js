const api_key = '29225d019bba46d286e4bed94635339e';


function Search() {
    async function newSearch(/*parámetro que pasa el usuario*/) {
        const url = "";
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }

    // fetch con promesa
    let input_value = /*valor del input buscador*/
    let info = newSearch(input_value);
    info.then(response => {
        //funcion que crea la noticia.
    }).catch(error => {
        console.log(error);
    })
}           