// DOM

const lampada = document.querySelector("#lampada") // Procura no HTML o objeto com o nome indicado
const ligar = document.querySelector("#on")
const desligar = document.querySelector("#off")


// EVENTO

ligar.addEventListener("click", acender)
desligar.addEventListener("click", apagar)
lampada.addEventListener("click", quebra)

// FUNÇÃO

function acender(){

    lampada.src = "imagens/ligada.gif"
}

function apagar(){

    lampada.src = "imagens/apagada.gif"
}

function quebra(){

    lampada.src = "imagens/quebrada.jpg"
}