const numbers = [1, 2, 3]

function iFor() {
    for (let i = 0; i <= 5; i++) {
        console.log(i) // 0 1 2 3 4 5
    }
}

iFor()

function iForEach() {
    numbers.forEach((element) => {
        console.log(element) // 1 2 3
    });
}

iForEach()