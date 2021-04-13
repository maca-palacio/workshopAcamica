let searchInput = document.getElementById('busc');
let searchBtn = document.getElementById('boton');
let imagen = document.getElementById("imagen-noticia");
let titulo = document.getElementById("titulo");
let textoNoticia = document.getElementById("texto-noticia");
let fechaPublicaion = document.getElementById("fecha");

const api_key = '44dede0c8fe4abaf99c1ae97ac41b9e7';
const sortby = "publishedAt"; //Ordena noticias de mas a nuevas a mas viejas
const lang = ['en','es']; // selecion del lenguage en el que se va a buscar 

//funcion que se comunica con la API
async function newSearch(q) {
    let url = `https://gnews.io/api/v4/search?q=${q}&token=${api_key}&sortby=${sortby}&lang=${lang[1]}`
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

//funcion que crea la noticia 
function buscar(){
    let info = newSearch(searchInput.value);
    info.then(response =>{
        imagen.setAttribute('src',response.articles[0].image) //imagen
        titulo.textContent = response.articles[0].title; //titulo de la noticia 
        textoNoticia.textContent = response.articles[0].content; // contenido de la notica 
        fechaPublicaion.textContent = response.articles[0].publishedAt //fechas de la noticia 
        
    })
    .catch(error => {
        console.log(error);
    })
}

//evento del click y presionar enter para buscar noticia
searchBtn.addEventListener('click',buscar);
searchInput.addEventListener('keyup', ()=> {
    if (event.keyCode === 13) {
        buscar();
    }
});


// Loadstart --> Al cargar la página dispara función que busca y trae la última noticia 
addEventListener('DOMContentLoaded', () => {
    async function newSearch() {
        //let url = `https://gnews.io/api/v4/search?q=${q}&token=${api_key}&sortby=${sortby}&lang=${lang[1]}`
        let url = 'https://gnews.io/api/v4/top-headlines?token=44dede0c8fe4abaf99c1ae97ac41b9e7&lang=es'
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    
    //funcion que crea la noticia 
    function buscarPrincipal(){
        let info = newSearch();
        info.then(response =>{
            imagen.setAttribute('src',response.articles[0].image) //imagen
            titulo.textContent = response.articles[0].title; //titulo de la noticia 
            textoNoticia.textContent = response.articles[0].content; // contenido de la notica 
            fechaPublicaion.textContent = response.articles[0].publishedAt //fechas de la noticia 
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    buscarPrincipal();
});
