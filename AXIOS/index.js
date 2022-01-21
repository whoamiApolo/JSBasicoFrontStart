Filmes()
Pessoas()
Veiculos()

function Filmes(){
axios.get("https://swapi.dev/api/films/").then(response => {
    const results = response.data.results
    const listOfTitles = results.map(element => element.title)
    console.log(`Filmes: ${listOfTitles}`)
})
}

function Pessoas() {
    axios.get("https://swapi.dev/api/people/").then(response => {
        const results = response.data.results
        const listOfPeople = results.map(element => element.name)
        console.log(`Nomes: ${listOfPeople}`)
    })
}

function Veiculos() {
    axios.get("https://swapi.dev/api/vehicles/").then(response => {
        const results = response.data.results
        const listOfVehicles = results.map(element => element.name)
        console.log(`Veículos: ${listOfVehicles}`)
    })
}