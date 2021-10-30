let soma = 0
let somaElement = document.getElementById("soma")

somaElement.innerHTML = soma

function somar() {
    console.log("somando...")
    soma++
    somaElement.innerHTML = soma
}