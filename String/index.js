
function slice(){
    const nome = "Naruto Uzumaki"
        console.log(nome.slice(-7)) // Uzumaki
        console.log(nome.slice(0,6)) // Naruto
}

slice()

function split(){
    const nome = "Monkey D. Luffy"
        console.log(nome.split('')) // ['M', 'o', 'n', 'k', 'e', 'y', ' ', 'D', '.', ' ', 'L', 'u', 'f', 'f', 'y']
        console.log(nome.split(' ')) // ['Monkey', 'D.', 'Luffy']
}

split()

function replace(){
    const nome = "Naruto is the best"
    console.log(nome.replace("Naruto", "One Piece")) // One Piece is the best
}

replace()

function templateString(){
    nomes = ['Capitão', 'Espadachim', 'Navegadora', 'Atirador', 'Cozinheiro', 'Médico', 'Arqueóloga', 'Construtor', 'Músico', 'Timoneiro']
    console.log(nomes.map(nome => `${nome}, Tripulante dos Chapeus de Palha`))
}

templateString()