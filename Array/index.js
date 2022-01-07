function createArray() {
    const frutas = ["Banana", "Laranja"]
    console.log(frutas.length) // 2
}

createArray()

function itemArrayIndex() {
    const verduras = ["Coentro", "Salsa"]
    const first = verduras[0]
    const last = verduras[verduras.length - 1]
    console.log(`${first} \n` + `${last}`) // Coentro Salsa
}

itemArrayIndex()

function addLastArr(){
    const legumes = ["Cenoura"]
    const addLegumes = legumes.push("Batata", "Abóbora")
    console.log(legumes) // ['Cenoura', 'Batata', 'Abóbora']
    console.log(addLegumes)
    console.log(legumes.length)
}

addLastArr()

function removeLastArr() {
    const numbers = [1, 2, 3, 4]
    const removeNumbers = numbers.pop()
    console.log(numbers) // [1, 2, 3]
}

removeLastArr()

function removeFirstArr() {
    const roupas = ["camiseta", "camisa", "calça cargo", "tênis"]
    const removeRoupa = roupas.shift() 
    console.log(roupas) // ['camisa', 'calça cargo', 'tênis']
}

removeFirstArr()

function addFirstArr() {
    const countries = ["Canada", "England", "Australia"]
    const addCountries = countries.unshift("The United States")
    console.log(countries)
}

addFirstArr()

function indexOfArr(){
    const whatTimeDoYouGetUp = ["5:00","6:00", "7:00", "8:00"]
    const iUsuallyGetUpAtAbout = whatTimeDoYouGetUp.indexOf("7:00")
    console.log(iUsuallyGetUpAtAbout) // 2
}

indexOfArr()