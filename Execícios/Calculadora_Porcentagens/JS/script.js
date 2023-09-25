function resultadoPor(){
    const n1 = document.getElementById('valorTotal1')
    const n2 = document.getElementById('comissao')
    const respPorcentagem = document.getElementById('respPor')
    

    var c = Number(n1.value)
    var vt = Number(n2.value)

    var p = (vt*100)/c

    respPorcentagem.innerHTML = p.toFixed(2) + "%"
}

function resultadoCom(){
    const num1 = document.getElementById('valorTotal2')
    const num2 = document.getElementById('por')
    const respComissao = document.getElementById('respCom')
    const cen = document.getElementById('central')

    var valorT = Number(num1.value)
    var porc = Number(num2.value)

    var pt = (valorT*porc)/100

    respComissao.innerHTML = "R$" + pt.toFixed(2)
    cen.style.height = "380px"

    
}