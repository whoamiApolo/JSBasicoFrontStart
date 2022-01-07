function copySlice() {
    const sorvetes = ["Morango", "Abacaxi ao vinho", "Manga", "Flocos", "Napolitano"]

    const copy = sorvetes.slice(1, 4)
    console.log(copy) // ['Abacaxi ao vinho', 'Manga', 'Flocos']
}

copySlice()

function itemsSplice() {
    const coberturasSorverte = ["Chocolate", "Morango", "Caramelo", "Limão", "Doce de Leite"]

    coberturasSorverte.splice(1, 0, "Menta", "Leite Ninho")
    console.log(coberturasSorverte) // ['Chocolate', 'Menta', 'Leite Ninho', 'Morango', 'Caramelo', 'Limão', 'Doce de Leite']
    coberturasSorverte.splice(2, 1)
    console.log(coberturasSorverte) // ['Chocolate', 'Menta', 'Morango', 'Caramelo', 'Limão', 'Doce de Leite']
}

itemsSplice()