function isEvenWithoutModulo(num) {
    // your code here
    let num1 = (2*parseInt(num/2));
    if(num==num1) return true
    else return false
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
