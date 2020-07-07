function ocultarElementos(){
    document.getElementById("cartaGenerada").style.display="block";
}

/*--------------------------Opción Tema-----------------------------------*/

function valentin(){
    document.getElementById("cartaGenerada").classList.remove("cumpleaños");
    document.getElementById("cartaGenerada").classList.remove("motivacion");
    document.getElementById("cartaGenerada").classList.add("valentin");
}
function cumpleaños(){
    document.getElementById("cartaGenerada").classList.remove("valentin");
    document.getElementById("cartaGenerada").classList.add("cumpleaños");
}
function motivacion(){
    document.getElementById("cartaGenerada").classList.remove("valentin");
    document.getElementById("cartaGenerada").classList.add("motivacion");
}
/*-----------------------------------------------------------------------*/



/*--------------------------Opción Imagen-----------------------------------*/

function FotoSelect(nombreFoto){
    document.getElementById("imagenSeleccionada").src = "../imagenes/" + nombreFoto + ".jpg";
}
/*-----------------------------------------------------------------------*/



/*--------------------------Opción Color-----------------------------------*/

function rosado(){
    document.getElementById("cartaGenerada").style.backgroundColor="#a16572";
}
function azulado(){
    document.getElementById("cartaGenerada").style.backgroundColor="#688bac";
}
function vino(){
    document.getElementById("cartaGenerada").style.backgroundColor="#500f18";
}
/*-----------------------------------------------------------------------*/



/*--------------------------Opción Datos-----------------------------------*/

var title = document.getElementById("Titulo");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.tituloUsado').innerHTML= inputtext;
});
var title = document.getElementById("Subtitulo");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.subtituloUsado').innerHTML= inputtext;
});
var title = document.getElementById("Nombre");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.autor').innerHTML= inputtext;
});
var title = document.getElementById("Mensaje");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.textoUsado').innerHTML= inputtext;
});
var fecha = new Date();
document.getElementById("fechaCambiar").innerHTML = fecha;
/*-----------------------------------------------------------------------*/
