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