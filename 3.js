var texto = "Brasil bi campeão BBB";
var caractere = "b";
countBs(texto);
function countBs(texto){
    let count=0;
    for(var i = 0; i <= texto.length; i++){
        if(texto[i] == "B"){
            count += 1;
        }
    }

    console.log(count + " letras B foram encontradas.");
}

countChar(texto, caractere);
function countChar(texto, caractere){
    let count=0;
    for(var i = 0; i <= texto.length; i++){
        if(texto[i] == caractere){
            count += 1;
        }
    }

    console.log(count + " letras " + caractere + " foram encontradas.");
}