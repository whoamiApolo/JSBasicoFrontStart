function numbersArr() {
    const numbers = [1, 2, 3, 4, 5, 6]
    numbers.map( (value, index, array) => {
        console.log(value * 2) // 2, 4, 6, 8, 10, 12
    })
}

numbersArr()

function gamesArr(){
    const jogos = [ {id: "1", name: "God of War Ragnarok"},
                    {id: "2", name: "The Last Of Us Part II"},
                    {id: "3", name: "Fifa 22"},
                    {id: "4", name: "Red Dead Redemption II"},
                    {id: "5", name: "Cyberpunk 2077"},
                    {id: "6", name: "Assassins Creed Valhalla"},
                    {id: "7", name: "Spider-Man: Miles Morales"}]

     jogos.map( (value, index, array) => {
        console.log(`${value.id} - ${value.name}`) /* 1 - God of War Ragnarok 2 - The Last Of Us Part II 3 - Fifa 22 4 - Red Dead Redemption II 5 - Cyberpunk 2077 6 - Assassins Creed Valhalla 7 - Spider-Man: Miles Morales */
     })
}

gamesArr()