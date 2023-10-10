function isOddWithoutModulo(num) {
    // your code here
    let num1 = (2*parseInt(num/2));
    if(num==num1) return false
    else return true
   
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
