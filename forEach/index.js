function numbersArr() {
    const numbers = [1, 3, 5]

    numbers.forEach((value, index, array) => {
        console.log(array) // [1, 3, 5]
        console.log(index) // 0, 1, 2,
        console.log(value) // 1, 3, 5
    });
}

numbersArr()

function fruitsArr() {
    const fruits = ["orange", "banana", "apple"]

    fruits.forEach((value, index, array) => {
        console.log(value) // orange, banana, apple
        console.log(index) // 0, 1, 2
        console.log(array)
    });
}

fruitsArr()

function animesArr() {
    const animes = [{ id: 1, name: "Naruto" },
    { id: 2, name: "One Piece" }]

    animes.forEach((value, index, array) => {
        console.log(value.name) // Naruto, One piece
        console.log(value.id)   // 1, 2
    });
}

animesArr()