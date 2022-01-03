/*Scope*/
var name = "Global"

function foo(){
    console.log(name)
}

foo()


function foo1(){
    var name = "Local"
    console.log(name)

    if(true){
        var teste = "Local 2"
    }
    console.log(teste)
}


foo1()
console.log('var foi declarado dentro da function foo1, então não temos acesso ao valor declarado na variavel name (Local), mas sim a variável ' + name)


function foo2()