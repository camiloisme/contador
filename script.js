/*Botones aumentar, disminuir y reestablecer*/
const botonAumentar = document.getElementById("aumentar")
const mostrarValorContador = document.getElementById("contador")
const botonDisminuir = document.getElementById("disminuir")
const botonReestablecer = document.getElementById("reestablecer")

let contador = 0;

botonAumentar.addEventListener("click", function aumentarValor(){
    contador = contador + 1;
    actualizarContador();
})
botonDisminuir.addEventListener("click", function disminuirValor(){
    contador = contador - 1;
    actualizarContador();
})
botonReestablecer.addEventListener("click", function reestablecerValor(){
    contador = 0;
    actualizarContador();
})

function actualizarContador (){
    mostrarValorContador.textContent = contador;
}
/*Boton cambiar color BODY*/
window.addEventListener("load", function(){
    //Guardamos el color original y establecemos una variable para el reset del body//
    const cuerpo = document.getElementById("cuerpo");
    const colorOriginal = window.getComputedStyle(cuerpo).backgroundColor;
    
    //Mi código original para cambio de color//
    document.getElementById("forma").addEventListener("submit", function(e){
        e.preventDefault();
        var colorFondo = document.getElementById("color").value;
        document.getElementById("cuerpo").style.backgroundColor = colorFondo;
    })
    //Acá añadimos la función del reset del body color//
    document.getElementById("original").addEventListener("click", function(e){
        e.preventDefault();
        cuerpo.style.backgroundColor = colorOriginal;
        document.getElementById("color").value = "";
    })

})

//Color Aleatorio 
const boton =document.getElementById("random");

boton.addEventListener("click", function(e){
    e.preventDefault();
    const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = colorAleatorio;
    document.getElementById("color").value = colorAleatorio;

});