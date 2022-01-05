/*
const items = document.getElementsByClassName('item') HTML Collection = objeto
*/

const items = Array.from(document.getElementsByClassName('item')) 
//Array.from() para transformar o HTML Collection em um array.

items.forEach(lista => {
    lista.addEventListener('click', onItemClick)
})

function onItemClick(event) {
    console.log("O item selecionado foi:", event.target.innerHTML)
}