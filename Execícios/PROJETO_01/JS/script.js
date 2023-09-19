const periodo = document.getElementById('imagem')
const horario = document.getElementById('horario')
const fundo = document.getElementById('fundo')
const titulo = document.getElementById('titulo')

const t = setInterval(tempo, 1000)

function tempo(){
    let relogio = new Date()

    let hora = relogio.getHours()

    if(hora >= 6 && hora < 12){
        horario.innerHTML = `<p>AGORA SÃO ${hora} HORAS</p>`
        periodo.src = "IMAGENS/manha.jpg"
        fundo.style.background = "rgb(240, 240, 171)"
    }else if(hora >= 12 && hora < 18){
        horario.innerHTML = `<p>AGORA SÃO ${hora} HORAS</p>`
        periodo.src = "IMAGENS/tarde.jpg"
        fundo.style.background = "pink"
    }else{
        horario.innerHTML = `<p>AGORA SÃO ${hora} HORAS</p>`
        periodo.src = "IMAGENS/noite.jpg"
        fundo.style.background = "#446275"
        titulo.style.color = "white" 
    }
}