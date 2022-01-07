const materiaisEscolares = ["Caderno", "Lápis de escrever", "Caneta", "Borracha"]
const material = materiaisEscolares.indexOf("Caneta")
console.log(material) // 2

materiaisEscolares.splice(material, 1)
console.log(materiaisEscolares) // ['Caderno', 'Lápis de escrever', 'Borracha']

materiaisEscolares.splice(0, materiaisEscolares.length)
console.log(materiaisEscolares) // []