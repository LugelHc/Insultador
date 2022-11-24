let li1 = document.getElementsByClassName("insulto1");
let li2 = document.getElementsByClassName("insulto2");
const lista = document.querySelector(".insulto1-lista");
const lista2 = document.querySelector(".insulto2-lista");
largoLista1 = li1.length;
largoLista2 = li2.length; 
function recorrerLista (largo){
    return Math.floor(Math.random()*(largo))
}
document.querySelector(".btn-gen").addEventListener("click",()=>{
    let crearNumeroRandom1 =recorrerLista(largoLista1);
    let crearNumeroRandom2 = recorrerLista(largoLista2);
    lista.children[crearNumeroRandom1].style.background = "#dd2" 
    lista2.children[crearNumeroRandom2].style.background = "#dd2" 
    document.querySelector(".respuesta").innerHTML += "<b>" + "Gordo " + lista.children[crearNumeroRandom1].innerHTML + " De " + lista2.children[crearNumeroRandom2].innerHTML + " " + "</b>";
});