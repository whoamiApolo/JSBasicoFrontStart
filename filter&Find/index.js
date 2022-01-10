const characters = [
    {name: "Monkey D.", lastName: "Luffy", age: 19},
    {name: "Naruto", lastName: "Uzumaki",  age: 17},
    {name: "Pantera", lastName: "Negra", age: 25},
    {name: "Super", lastName: "Choque", age: 20},
    {name: "Super", lastName: "Choque", age: 0}
]

function findArr(){
console.log(characters.find(element => element.name === "Super")) // {name: 'Super', lastName: 'Choque', age: 20}
console.log(characters.find(element => element.lastName === "Uzumaki")) // {name: 'Naruto', lastName: 'Uzumaki', age: 17}
console.log(characters.find(element => element.age < 30)) // {name: 'Monkey D.', lastName: 'Luffy', age: 19}
console.log(characters.findIndex(element => element.age > 1)) // 0
}

findArr()

function filterArr() {
    console.log(characters.filter(element => element.name === "Super")) // 0: {name: 'Super', lastName: 'Choque', age: 20}  1: {name: 'Super', lastName: 'Choque', age: 0}
}

filterArr()