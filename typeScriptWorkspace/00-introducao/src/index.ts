var a = 6;
var b = 15; 
if(a === 6){
    let a = 5; // mantem o resultado interno no bloco
    var b = 3; // declara o valor sobreescrevendo
    console.log(a); 
    console.log(b); 
}
console.log(a);
console.log(b);