const newArr = [
    { name: "abc", lastName: "def", age: 123 },
    { name: "acb", lastName: "dfe", age: 132 },
    { name: "bca", lastName: "efd", age: 231 },
    { name: "bac", lastName: "edf", age: 213 },
    { name: "cab", lastName: "fda", age: 312 },
    { name: "cba", lastName: "fad", age: 321 },
]

const ageGreaterThan100 = (element) => element.age > 300
const completeName = (element) => `${element.name} ${element.lastName}`
const procurandoElement = (element) => element.name === "abc"

function maiorQueAndCompleteName() {
    console.log(newArr.filter(ageGreaterThan100)) // 0: {name: 'cab', lastName: 'fda', age: 312} 1: {name: 'cba', lastName: 'fad', age: 321}
    console.log(newArr.map(completeName)) // 7: {name: 'teste', lastName: 'testando', age: 0}
}
maiorQueAndCompleteName()

function addElementArr() {
    console.log(newArr.push({ name: "teste", lastName: "testando", age: 0 })) // 7: {name: 'teste', lastName: 'testando', age: 0}
    console.log(newArr.unshift({ name: "teste", lastName: "testando", age: 10 })) // 0: {name: 'teste', lastName: 'testando', age: 10}
    console.log(newArr)
}
addElementArr()

function localizaElement() {
    console.log(newArr.filter(procurandoElement)) // 0: {name: 'abc', lastName: 'def', age: 123}
}

localizaElement()
