let numero = prompt("Digite um número aqui")

if(numero % 2 == 0){
    if(numero % 3 === 0){
console.log("O numero é divisivel por 2 ou 3")
    }else if(numero % 2 === 0){
        console.log("O número é divisível por 2")
    }else if(numero % 3 === 0){
        console.log("O núumero é divisível por 3")
    }else{ 
        console.log("O número não é divisível nem por 2 nem por 3")
    }
}

let numero2 = prompt("Digite outro número aqui")

if(numero2 % 2 === 0 && numero2 % 3 === 0 ){ 
    console.log("O numero é divisível por 2 ou 3")
    }else if(numero2 % 2 === 0){
        console.log("O número é divisível por 2") 
    }else if (numero2 % 3 === 0){
        console.log("O número é divisível por 3")
    }else{
        console.log("O número não é divisível por 2 nem por 3")
    }


