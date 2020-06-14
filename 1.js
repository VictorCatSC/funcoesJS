var val1 = 4122321;
var val2 = 4124321;

function minimo(num1,num2){
    if(num1 > num2){
       return num1;
    }else{
        return num2;
    }
}

console.log(minimo(val1,val2));