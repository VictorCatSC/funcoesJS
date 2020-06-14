var raio = 10;
const valorDePi = Math.PI;
circunferencia(raio, valorDePi);
function circunferencia(raio, valorDePi){
    console.log("Circunferencia é de: "+ 2 * valorDePi * raio);
}
area(raio, valorDePi);
function area(raio, valorDePi){
    console.log("Area é de: "+ valorDePi * (raio*raio));
}