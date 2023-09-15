const hr = document.getElementById('H')
const min = document.getElementById('M')
const seg = document.getElementById('S')

const relogio = setInterval(tempo, 1000)

function tempo(){
    let horario = new Date()

    let hora = horario.getHours()
    let minuto = horario.getMinutes()
    let segundo = horario.getSeconds()

    if (hora < 10){
        hora = "0" + hora
    }
    
    if (minuto < 10){
        minuto = "0" + minuto
    }
    
    if (segundo < 10){
        segundo = "0" + segundo
    }

    hr.innerText = hora
    min.innerText = minuto
    seg.innerText = segundo


}
