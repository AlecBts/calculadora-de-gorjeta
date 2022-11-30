let conta = 0 
let gorjeta = 0
let numeroDePessoas = 0 
let botaoDeGorjetaAtual  

function receberConta() {
    conta = Number(document.querySelector('#bill-input').value)
    calcularTotais(conta)
    validarDados()
}

function receberPorcentagem(numero) {
    if (botaoDeGorjetaAtual !== 0) {
        botaoDeGorjetaAtual.classList.remove("button-selected")
    }

    
    if (numero == 0) {
        gorjeta = Number(document.querySelector("#tip-input").value)
        validarDados()
        return
    } 
    
    gorjeta = numero
    
    botaoDeGorjetaAtual = document.querySelector(`input[value="${numero}%"]`)
    botaoDeGorjetaAtual.classList.add("button-selected")
    document.querySelector("#tip-input").value = ""
 
 
    validarDados()
}

function receberNumeroDePessoas() {
    numeroDePessoas = Number(document.querySelector("#people-input").value)
    validarDados()
}

function validarDados() {
    if (conta !== 0 && gorjeta !== 0 && numeroDePessoas !== 0) {
         calcularTotais()
         return
    }
}

function calcularTotais() {
    const gorjetaPorPessoa = (conta * (gorjeta / 100)) / numeroDePessoas
    const  paragrafoGorjeta = document.querySelector("#tip-amount__result")
    paragrafoGorjeta.innerText = `${gorjetaPorPessoa.toFixed(2)}`

    const totalPorpessoa = (conta / numeroDepessoas) + gorjetaporPessoa

    const paragrafoTotal = document.querySelector("#total__results")
    paragrafoTotal.innerText = `${totalPorPessoa.tofixed(2)}`
}

function reset() {
    let conta = 0
    document.querySelector("#tip-input").value = ""
    
    let gorjeta = 0
    if (botaoDeGorjetaAtual !== 0) {
        botaoDeGorjetaAtual.classList.remove("button-selected")
    }
    document.querySelector("#tip-input").value = ""
   
    botaoDeGorjetaAtual = 0
    
    numeroDePessoas = 0
    document.querySelector("#people-input").value = ""
    
    const paragrafoGorjeta = document.querySelector("#tip-amount__result")
    paragrafoGorjeta.innerText = "$0.00"

    const paragrafoTotal = document.querySelector("#total__results")
    paragrafoTotal.innerText = "$0.00"
}