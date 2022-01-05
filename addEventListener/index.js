const name = document.getElementById("name")
    name.addEventListener("click", changeName)

function changeName() {
    name.innerHTML = "Hello World"
}