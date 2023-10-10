// Write your function here
function keep (arr, elemento){
    let resultado = arr.filter(al => al==elemento);
    return resultado;
}
let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]
