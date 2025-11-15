let botonElement= document.getElementById("boton-cambiar-frase");
let fraseElement= document.getElementById("frase");
let autorElement= document.getElementById("autor");

function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function cambiarFrase(){
   let indiceAleatorio = generarEnteroAleatorio(0, frasesInspiradoras.length); 
   fraseElement.innerText = `"${frasesInspiradoras[indiceAleatorio].frase}"`;
   autorElement.innerText = frasesInspiradoras[indiceAleatorio].autor;
}

let indiceAleatorio = generarEnteroAleatorio(0, frasesInspiradoras.length);
cambiarFrase();

botonElement.addEventListener("click", cambiarFrase);